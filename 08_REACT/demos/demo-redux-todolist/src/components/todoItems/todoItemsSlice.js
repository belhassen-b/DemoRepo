import { createSlice } from "@reduxjs/toolkit";

const todoItemsSlice = createSlice({
  name: "todoItems",
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // dispatch(addTodoAction(<Ma todo>))
    addTodoAction(state, action) { // <Ma Todo> sera dans action.payload
      state.todos.push(action.payload)
    },
    editTodoAction(state, action) {
      const todoToEdit = state.todos.find(todo => todo.id === action.payload.id)
      if (todoToEdit) {
        state.todos = [...state.todos.filter(todo => todo.id !== action.payload.id), action.payload]
      }
    },
    // dispatch(removeTodoAction(<todoId>))
    removeTodoAction(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    // dispatch(setTodosAction(<todo[]>))
    setTodosAction(state, action) {
      state.todos = action.payload
    }
  }
})

export const { addTodoAction, editTodoAction, removeTodoAction, setTodosAction } = todoItemsSlice.actions

export default todoItemsSlice.reducer