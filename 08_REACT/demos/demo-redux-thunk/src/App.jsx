import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, signInAction, signUpAction } from "./components/auth/authSlice";
import SignForm from "./components/auth/SignForm";
import RecipeDisplay from "./components/recipes/RecipeDisplay";
import RecipeForm from "./components/recipes/RecipeForm";
import { addRecipe, deleteRecipe, editRecipe, fetchRecipes } from "./components/recipes/recipesSlice";
import Modal from "./components/shared/Modal";

function App() {
  const [signFormMode, setSignFormMode] = useState("")
  const [recipeFormMode, setRecipeFormMode] = useState("")
  const user = useSelector(state => state.auth.user)
  const recipes = useSelector(state => state.recipes.recipes)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const dispatch = useDispatch()

  const onSigningHandler = async (credentials) => {
    if (signFormMode === 'Sign In') {
      await dispatch(signInAction(credentials))
    } else {
      await dispatch(signUpAction(credentials))
    }

    setSignFormMode("")
  }

  const onAddHandler = async (recipeValues) => {
    dispatch(addRecipe(recipeValues))  
  }

  const onDeleteHandler = async (recipeId) => {
    dispatch(deleteRecipe(recipeId))
  }

  const onEditHandler = async (recipeWithId) => {
      dispatch(editRecipe(recipeWithId))
  }

  const setRecipeFormModeAndSelectedRecipe = ({recipe, mode}) => {
    setSelectedRecipe(recipe)
    setRecipeFormMode(mode)
  }

  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])

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