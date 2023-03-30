import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";
import charactersSlice from "./routes/characters/charactersSlice";
import weaponsSlice from "./routes/weapons/weaponsSlice";
import charClassesSlice from "./routes/charClasses/charClassesSlice";
import ennemiesSlice from "./routes/ennemies/ennemiesSlice";

const store = configureStore({
  reducer: {
    authSlice,
    charactersSlice,
    weaponsSlice,
    charClassesSlice,
    ennemiesSlice
  }
})

export default store