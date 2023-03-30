import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./components/albums/albumsSlice";
import authSlice from "./components/auth/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    albums: albumsSlice
  }
})

export default store