import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from '../../firebaseConfig'
import { xpRewards } from "../../utils/xpRewards";

export const fetchEnnemies = createAsyncThunk(
  "ennemies/fetchEnnemies",
  async () => {
    const response = await axios.get(`${BASE_DB_URL}ennemies.json`)

    if (response.status !== 200) {
      throw new Error("Someting went wrong when fetching ennmies...")
    }
    
    const tmpArray = []

    for (const key in response.data) {
      tmpArray.push({id: key, ...response.data[key]})
    }

    return tmpArray
  }
)

export const addEnnemy = createAsyncThunk(
  "ennemies/addEnnemy",
  async (monsterValues, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.post(`${BASE_DB_URL}ennemies.json?auth=${token}`, monsterValues)

      if (response.status !== 200) {
        throw new Error("Someting went wrong when adding an ennmy...")
      }

      return {id: response.data.name, ...monsterValues}
    }
  }
)

const ennemiesSlice = createSlice({
  name: "ennemies",
  initialState: {
    ennemies: [],
    xpRewards: [...xpRewards],
    isLoading: false,
    error: null
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchEnnemies.pending, (state) => {
      state.isLoading = true
      state.ennemies = []
      state.error = null
    })

    builder.addCase(fetchEnnemies.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchEnnemies.fulfilled, (state, action) => {
      state.isLoading = false
      state.ennemies = action.payload
    })

    builder.addCase(addEnnemy.fulfilled, (state, action) => {
      state.ennemies.push(action.payload)
    })
  }
})

export default ennemiesSlice.reducer