import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async () => {
    const response = await axios.get(`${BASE_DB_URL}people.json`)

    if (response.status !== 200) {
      throw new Error("Error while getting people.")
    }

    const tmpArray = []

    for (const key in response.data) {
      tmpArray.push({id : key, ...response.data[key]})
    }

    return tmpArray
  }
)

export const addPeople = createAsyncThunk(
  "people/addPeople",
  async (peopleValues, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await axios.post(`${BASE_DB_URL}people.json?auth=${token}`, peopleValues)
  
      if (response.status !== 200) {
        throw new Error("Error while adding a people.")
      }
  
      return {id: response.data.name, ...peopleValues}
    }
  }
)

export const editPeople = createAsyncThunk(
  "people/editPeople",
  async ({id, ...peopleValues}, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await axios.patch(`${BASE_DB_URL}people/${id}.json?auth=${token}`, peopleValues)

      if (response.status !== 200) {
        throw new Error("Error while editing a people.")
      }

      return {id, ...response.data}
    }
  }
)

export const deletePeople = createAsyncThunk(
  "people/deletePeople",
  async (id, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await axios.delete(`${BASE_DB_URL}people/${id}.json?auth=${token}`)
  
      if (response.status !== 200) {
        throw new Error("Error while deleting a people.")
      }
  
      return id
    }
  }
)

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.people = []
      state.isLoading = true
      state.error = null
    })

    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.isLoading = false
      state.people = action.payload
    })

    builder.addCase(addPeople.fulfilled, (state, action) => {
      state.people.push(action.payload)
    })

    builder.addCase(editPeople.fulfilled, (state, action) => {
      const { id } = action.payload
      const peopleFound = state.people.find(p => p.id === id)
      if (peopleFound) {
        state.people = [...state.people.filter(p => p.id !== id), action.payload]
      }
    })

    builder.addCase(deletePeople.fulfilled, (state, action) => {
      const peopleFound = state.people.find(p => p.id === action.payload)
      if (peopleFound) {
        state.people = state.people.filter(p => p.id !== action.payload)
      }
    })
  }
})

export default peopleSlice.reducer