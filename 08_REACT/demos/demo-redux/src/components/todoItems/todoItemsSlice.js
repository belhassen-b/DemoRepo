import { createSlice } from "@reduxjs/toolkit";
let count = 0;
/*
  Pour créer une tranche compatible avec notre store Redux, il nous faut passer par la fonction 'createSlice' de '@reduxjs/toolkit'.

  Cette fonction va prendre en paramètre un objet JS. Cet objet aura plusieurs attributs essentiels : 
    - name: Le nom de la tranche, qui servira à différencier les actions vis à vis du store global
    - initialState: L'état de base de la tranche au lancement de l'application et à son branchement au store global
    - reducers: Un objet JS qui contiendra des méthodes. Chaque méthode sera automatiquement alimentée dans ses paramètres de:
      - state: L'état de la tranche
      - action: Qui contiendra derrière son .payload la valeur de l'élément passé lors de l'appel de l'action au niveau de l'application
*/

const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: {
    todos: [],
    isLoading: false,
    error: null
  },
  reducers: {
    addTodoAction(state, action) {
      state.todos.push({id: ++count, title: action.payload})
    },
    removeTodoAction(state, action) {
      console.log(action.payload);
      state.todos = state.todos.filter(t => t.id !== action.payload)
    },
    setTodosAction(state, action) {
      state.todos = []

      const texts = action.payload
      
      for (const t of texts) {
        state.todos.push({id: ++count, title: t})
      }
    }
  }
})

export const { addTodoAction, removeTodoAction, setTodosAction } = todoItemsSlice.actions

export default todoItemsSlice.reducer