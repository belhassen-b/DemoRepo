import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../firebaseConfig";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
      const response = await fetch(`${BASE_DB_URL}recipes.json`)

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des recettes !")
      }

      const data = await response.json()

      const tmpArray = []

      for (const key in data) {
        tmpArray.push({id: key, ...data[key]})
      }

      return tmpArray
  }
)

export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  // Si l'on veut pouvoir accéder au state durant l'action asynchrone, il faut déplier le second paramètre de la fonction asynchrone et obtenir la fonction 'getState()'
  async (recipeValues, {getState}) => {
    const user = getState().auth.user
    if (user) {
      const token = user.idToken
      if (token) {
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

        return {id: data.name, ...recipeValues}
      }
    } 
  }
)

export const editRecipe = createAsyncThunk(
  "recipes/editRecipe",
  async ({id, ...recipeValues}, {getState}) => {
    const user = getState().auth.user
    if (user) {
      const token = user.idToken
      if (token) {
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

        return {id, ...data}
      }
    }
  }
)

export const deleteRecipe = createAsyncThunk(
  "recipes/deleteRecipe",
  async (recipeId, {getState}) => {
    const user = getState().auth.user
    if (user) {
      const token = user.idToken
      if (token) {
        const response = await fetch(`${BASE_DB_URL}recipes/${recipeId}.json?auth=${token}`, {
          method: "DELETE"
        })

        if (!response.ok) {
          throw new Error("Il y a eu une erreur lors de la requête DELETE d'une recette !")
        }

        return recipeId
      }
    }
  }
)

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    isLoading: false,
    error: null,
    ingredients: [
      { id: 1, name: "Tomate" },
      { id: 2, name: "Farine" },
      { id: 3, name: "Oeuf" },
      { id: 4, name: "Sucre" },
      { id: 5, name: "Lait" },
    ]
  },
  reducers: {
    addRecipeAction(state, action) {
      state.recipes.push(action.payload)
    },
    setRecipeAction(state, action) {
      state.recipes = action.payload
    },
    editRecipeAction(state, action) {
      const {id} = action.payload
      const recipeFound = state.recipes.find(r => r.id === id)
      if (recipeFound) {
        state.recipes = [...state.recipes.filter(r => r.id !== id), action.payload]
      }
    },
    deleteRecipeAction(state, action) {
      const id = action.payload
      const recipeFound = state.recipes.find(r => r.id === id)
      if (recipeFound) {
        state.recipes = state.recipes.filter(r => r.id !== id)
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecipes.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.recipes = []
    })

    builder.addCase(fetchRecipes.fulfilled, (state, action) => {
      state.isLoading = false
      state.recipes = action.payload
    })

    builder.addCase(fetchRecipes.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(addRecipe.fulfilled, (state, action) => {
      state.recipes.push(action.payload)
    })

    builder.addCase(deleteRecipe.fulfilled, (state, action) => {
      state.recipes = state.recipes.filter(r => r.id !== action.payload)
    })

    builder.addCase(editRecipe.fulfilled, (state, action) => {
      const {id} = action.payload
      const recipeFound = state.recipes.find(r => r.id === id)
      if (recipeFound) {
        state.recipes = [...state.recipes.filter(r => r.id !== id), action.payload]
      }
    })
  }
})

export const { addRecipeAction, setRecipeAction, editRecipeAction, deleteRecipeAction } = recipesSlice.actions

export default recipesSlice.reducer