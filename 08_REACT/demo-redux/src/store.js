import {configureStore} from '@reduxjs/toolkit';
import todoItemSlice from "./components/todoItems/todoItemSlice";


const store = configureStore({
    reducer: {
        todoItems: todoItemSlice

    }
})

export default store;