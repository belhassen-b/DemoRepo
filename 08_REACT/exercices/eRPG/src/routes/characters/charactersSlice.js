import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";
import { xpTable } from "../../utils/xpTable";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await axios.get(`${BASE_DB_URL}characters.json`)

    if (response.status !== 200) {
      throw new Error("Something went wrong when fetching characters...")
    }

    const tmpArray = []

    for (const key in response.data) {
      tmpArray.push({id: key, ...response.data[key]})
    }

    return tmpArray
  }
)

export const deleteCharacter = createAsyncThunk(
  "characters/deleteCharacter",
  async (charId, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.delete(`${BASE_DB_URL}characters/${charId}.json?auth=${token}`)

      if (response.status !== 200) {
        throw new Error("Something went wrong when deleting a character...")
      }
      
      return charId
    }
  }
)
  
export const addCharacter = createAsyncThunk(
  "characters/addCharacter",
  async (characterValues, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.post(`${BASE_DB_URL}characters.json?auth=${token}`, characterValues)
      
      if (response.status !== 200) {
      throw new Error("Something went wrong when adding a character...")
      }

      return {id: response.data.name, ...characterValues}
    }
  }
)

export const editCharacter = createAsyncThunk(
  "characters/editCharacter",
  async ({id, ...characterValues}, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.patch(`${BASE_DB_URL}characters/${id}.json?auth=${token}`, characterValues)
      
      if (response.status !== 200) {
      throw new Error("Something went wrong when editing a character...")
      }

      return {id, ...response.data}
    }
  }
)

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    xpTable: [...xpTable],
    isLoading: false,
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload
    })

    builder.addCase(deleteCharacter.pending, (state) => {
      state.isLoading = true
      state.error = null
    })

    builder.addCase(deleteCharacter.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(deleteCharacter.fulfilled, (state, action) => {
      state.isLoading = false
      state.characters = state.characters.filter(c => c.id !== action.payload)
    })

    builder.addCase(addCharacter.fulfilled, (state, action) => {
      state.characters.push(action.payload)
    })

    builder.addCase(editCharacter.fulfilled, (state, action) => {
      const { id } = action.payload
      const characterFound = state.characters.find(c => c.id === id)
      if (characterFound) {
        state.characters = [...state.characters.filter(c => c.id !== id), action.payload]
      }
    })
  }
})

export default charactersSlice.reducer