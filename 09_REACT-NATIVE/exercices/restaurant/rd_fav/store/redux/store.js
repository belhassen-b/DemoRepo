import { configureStore } from "@reduxjs/toolkit";


import fav from './favorites'

export const store = configureStore({
    reducer : {
        fav : fav
    }
})