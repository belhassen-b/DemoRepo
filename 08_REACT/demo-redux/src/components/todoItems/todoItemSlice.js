import {createSlice} from "@reduxjs/toolkit";

const todoItemSlice = createSlice({
    name: "todoItems",
    initializeState: {
        todos: [],
        isLoading: false,
        error: null
    },
    reducers: {
        addTodoAction(state , action) {
            state.todos.push(action.payload)
        }
    }
})
export const {addTodoAction} = todoItemSlice.actions
export default todoItemSlice.reducer
