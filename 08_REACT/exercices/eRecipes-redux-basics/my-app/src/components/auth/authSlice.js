import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload
      localStorage.setItem('token', action.payload.idToken)
    },
    removeUser(state) {
      state.user = null
      localStorage.removeItem('token')
    }
  }
})

export const { setUser, removeUser } = authSlice.actions

export default authSlice.reducer