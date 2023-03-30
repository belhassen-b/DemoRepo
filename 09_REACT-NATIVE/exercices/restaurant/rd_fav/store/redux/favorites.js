import { createSlice } from "@reduxjs/toolkit";

const fav = createSlice({
    name : 'fav',
    initialState : {
        ids : ['m9','m3']
    },
    reducers : {
        addIds : (state,action) => {
            state.ids.push(action.payload.id)
        },
        removeIds : (state,action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})


export const removeIds = fav.actions.removeIds;
export const addIds = fav.actions.addIds;
export default fav.reducer;