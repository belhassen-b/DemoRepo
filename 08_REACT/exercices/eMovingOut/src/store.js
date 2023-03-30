import { configureStore } from "@reduxjs/toolkit";
import addressesSlice from "./routes/addresses/addressesSlice";
import authSlice from "./routes/auth/authSlice";
import peopleSlice from "./routes/people/peopleSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    addresses: addressesSlice,
    people: peopleSlice
  }
})

export default store