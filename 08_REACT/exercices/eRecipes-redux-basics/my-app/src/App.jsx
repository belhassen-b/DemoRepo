import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "./components/auth/authSlice";
import SignForm from "./components/auth/SignForm";
import RecipeDisplay from "./components/recipes/RecipeDisplay";
import RecipeForm from "./components/recipes/RecipeForm";
import { addRecipeAction, deleteRecipeAction, editRecipeAction, setRecipeAction } from "./components/recipes/recipesSlice";
import Modal from "./components/shared/Modal";
import { BASE_DB_URL, SIGN_IN_URL, SIGN_UP_URL } from './firebaseConfig'

function App() {
  const [signFormMode, setSignFormMode] = useState("")
  const [recipeFormMode, setRecipeFormMode] = useState("")
  const user = useSelector(state => state.auth.user)
  const recipes = useSelector(state => state.recipes.recipes)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const dispatch = useDispatch()

  const onSigningHandler = async (credentials) => {
    try {
      const response = await fetch(signFormMode === 'Sign In' ? SIGN_IN_URL : SIGN_UP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })

      if (!response.ok) {
        throw new Error("Il y a eu un souci pour s'authentifier !")
      }

      const data = await response.json()

      dispatch(setUser(data))
      setSignFormMode("")

    } catch (error) {
      console.error(error.message);
    }
  }

  const onAddHandler = async (recipeValues) => {
    if (user) {
      const token = user.idToken
      if (token) {
        try {
          const response = await fetch(`${BASE_DB_URL}recipes.json?auth=${token}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(recipeValues)
          })

          if (!response.ok) {
            throw new Error("Il y a eu une erreur lors de la requête POST d'une recette !")
          }

          const data = await response.json()

          dispatch(addRecipeAction({id: data.name, ...recipeValues}))

        } catch (error) {
          console.error(error.message);
        }
      }
    }    
  }

  const onDeleteHandler = async (recipeId) => {
      if (user) {
        const token = user.idToken
        if (token) {
          try {
            const response = await fetch(`${BASE_DB_URL}recipes/${recipeId}.json?auth=${token}`, {
              method: "DELETE"
            })
  
            if (!response.ok) {
              throw new Error("Il y a eu une erreur lors de la requête DELETE d'une recette !")
            }
  
            dispatch(deleteRecipeAction(recipeId))
          } catch (error) {
            console.error(error.message);
          }
        }
      }
  }

  const onEditHandler = async ({id, ...recipeValues}) => {
      if (user) {
        const token = user.idToken
        if (token) {
          try {
            const response = await fetch(`${BASE_DB_URL}recipes/${id}.json?auth=${token}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(recipeValues)
            })
  
            if (!response.ok) {
              throw new Error("Il y a eu une erreur lors de la requête PATCH d'une recette !")
            }
  
            const data = await response.json()
  
            dispatch(editRecipeAction({id, ...data}))

          } catch (error) {
            console.error(error.message);
          }
        }
      }
  }

  const setRecipeFormModeAndSelectedRecipe = ({recipe, mode}) => {
    setSelectedRecipe(recipe)
    setRecipeFormMode(mode)
  }

  const refreshRecipes = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}recipes.json`)

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des recettes !")
      }

      const data = await response.json()

      const tmpArray = []

      for (const key in data) {
        tmpArray.push({id: key, ...data[key]})
      }

      dispatch(setRecipeAction(tmpArray))
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    refreshRecipes()
  }, [])

  return (
    <div className="App">
      {recipeFormMode === "add" && createPortal(<Modal onClose={() => setRecipeFormMode("")} title="Add Recipe">
        <RecipeForm mode="add" onAdd={onAddHandler} />
      </Modal>, document.getElementById("modal-root"))}
      {recipeFormMode === "edit" && createPortal(<Modal onClose={() => setRecipeFormMode("")} title="Edit Recipe">
        <RecipeForm mode="edit" recipeId={selectedRecipe.id} onEdit={onEditHandler} />
      </Modal>, document.getElementById("modal-root"))}
      {recipeFormMode === "delete" && createPortal(<Modal onClose={() => setRecipeFormMode("")} title="Delete Recipe">
        <RecipeForm mode="delete" recipeId={selectedRecipe.id} onDelete={onDeleteHandler} />
      </Modal>, document.getElementById("modal-root"))}
      {signFormMode && createPortal(<Modal onClose={() => setSignFormMode("")} title={signFormMode}>
        <SignForm mode={signFormMode} onSubmit={onSigningHandler} />
      </Modal>, document.getElementById("modal-root"))}
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <span style={{cursor: "pointer"}} className="navbar-brand" ><i className="bi bi-globe"></i> eRecipes</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#eRecipe-navbar" aria-controls="eRecipe-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="eRecipe-navbar">
            {user ? (
              <button className="ms-auto btn btn-secondary" onClick={() => dispatch(removeUser())}>Sign Out</button>
              ) : (
              <>
                <button className="ms-auto btn btn-outline-info" onClick={() => setSignFormMode("Sign Up")}>Register</button>
                <button className="ms-2 btn btn-primary" onClick={() => setSignFormMode("Sign In")}>Sign In</button>
              </>
            )}
          </div>
        </div>
      </nav>
      </header>
      <main className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <div className="d-flex justify-content between">
              <h3>Recipes List</h3>
              {user && <button className="ms-auto btn btn-success" onClick={() => setRecipeFormMode("add")}><i className="bi bi-plus-circle"></i> Add</button>}
            </div>
            <hr />
            {recipes.length === 0 ? 
            <p>Il n'y a pas de recettes !</p> : 
            [...recipes].sort((a, b) => a.id.localeCompare(b.id)).map(r => <RecipeDisplay key={r.id} recipeId={r.id} setRecipeFormModeAndSelectedRecipe={setRecipeFormModeAndSelectedRecipe} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
