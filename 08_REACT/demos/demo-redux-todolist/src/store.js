import todoItemsSlice from "./components/todoItems/todoItemsSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    todoItems: todoItemsSlice
  }
})

export default store