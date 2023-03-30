import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },
  reducers: {
    setContactsAction(state, action) {
      state.contacts = action.payload
    }
  }
})

export const { setContactsAction } = contactsSlice.actions

export default contactsSlice.reducer