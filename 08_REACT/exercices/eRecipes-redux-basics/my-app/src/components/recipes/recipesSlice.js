import { createSlice } from "@reduxjs/toolkit";

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
  }
})

export const { addRecipeAction, setRecipeAction, editRecipeAction, deleteRecipeAction } = recipesSlice.actions

export default recipesSlice.reducer