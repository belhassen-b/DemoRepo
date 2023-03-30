import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";

export const fetchCharClasses = createAsyncThunk(
  "charClasses/fetchCharClasses",
  async () => {
    const response = await axios.get(`${BASE_DB_URL}charClasses.json`)

    if (response.status !== 200) {
      throw new Error("Something went wrong when getting the character classes...")
    }

    const tmpArray = []

    for (const key in response.data) {
      tmpArray.push({id: key, ...response.data[key]})
    }

    return tmpArray
  }
)

export const addCharClass = createAsyncThunk(
  "charClasses/addCharClass",
  async (charClass, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.post(`${BASE_DB_URL}charClasses.json?auth=${token}`, charClass)

      if (response.status !== 200) {
        throw new Error("Something went wrong when adding a character class..")
      }

      return {id: response.data.name, ...charClass}
    }
  }
)

export const editCharClass = createAsyncThunk(
  "charClasses/editCharClass",
  async ({id, ...charClass}, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.patch(`${BASE_DB_URL}charClasses/${id}.json?auth=${token}`, charClass)

      if (response.status !== 200) {
        throw new Error("Something went wrong when editing a character class..")
      }

      return {id, ...response.data}
    }
  }
)

export const deleteCharClass = createAsyncThunk(
  "charClasses/deleteCharClass",
  async (charClassId, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.delete(`${BASE_DB_URL}charClasses/${charClassId}.json?auth=${token}`)

      if (response.status !== 200) {
        throw new Error("Something went wrong when deleting a character class..")
      }

      return charClassId
    }
  }
)

const charClassesSlice = createSlice({
  name: "charClasses",
  initialState: {
    charClasses: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharClasses.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.charClasses = []
    })

    builder.addCase(fetchCharClasses.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchCharClasses.fulfilled, (state, action) => {
      state.isLoading = false
      state.charClasses = action.payload
    })

    builder.addCase(addCharClass.fulfilled, (state, action) => {
      state.charClasses.push(action.payload)
    })

    builder.addCase(editCharClass.fulfilled, (state, action) => {
      const { id } = action.payload
      const foundCharClass = state.charClasses.find(c => c.id === id)
      if (foundCharClass) {
        state.charClasses = [...state.charClasses.filter(c => c !== foundCharClass), action.payload]
      }
    })

    builder.addCase(deleteCharClass.fulfilled, (state, action) => {
      const foundCharClass = state.charClasses.find(c => c.id === action.payload)
      if (foundCharClass) {
        state.charClasses = state.charClasses.filter(c => c !== foundCharClass)
      }
    })
  }
})

export default charClassesSlice.reducer