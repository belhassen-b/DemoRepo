import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async () => {
    const response = await axios.get(`${BASE_DB_URL}addresses.json`)

    if (response.status !== 200) {
      throw new Error("Error while getting addresses.")
    }

    const tmpArray = []

    for (const key in response.data) {
      tmpArray.push({id : key, ...response.data[key]})
    }

    return tmpArray
  }
)

export const addAddress = createAsyncThunk(
  "addresses/addAddress",
  async (addressValues, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await axios.post(`${BASE_DB_URL}addresses.json?auth=${token}`, addressValues)
  
      if (response.status !== 200) {
        throw new Error("Error while adding an address.")
      }
  
      return {id: response.data.name, ...addressValues}
    }
  }
)

export const editAddress = createAsyncThunk(
  "addresses/editAddress",
  async ({id, ...addressValues}, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await axios.patch(`${BASE_DB_URL}addresses/${id}.json?auth=${token}`, addressValues)

      if (response.status !== 200) {
        throw new Error("Error while editing an address.")
      }

      return {id, ...response.data}
    }
  }
)

export const deleteAddress = createAsyncThunk(
  "addresses/deleteAddress",
  async (id, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await axios.delete(`${BASE_DB_URL}addresses/${id}.json?auth=${token}`)
  
      if (response.status !== 200) {
        throw new Error("Error while deleting an address.")
      }
  
      return id
    }
  }
)

const addressesSlice = createSlice({
  name: "addresses",
  initialState: {
    addresses: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAddresses.pending, (state) => {
      state.addresses = []
      state.isLoading = true
      state.error = null
    })

    builder.addCase(fetchAddresses.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchAddresses.fulfilled, (state, action) => {
      state.isLoading = false
      state.addresses = action.payload
    })

    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.addresses.push(action.payload)
    })

    builder.addCase(editAddress.fulfilled, (state, action) => {
      const { id } = action.payload
      const addressFound = state.addresses.find(a => a.id === id)
      if (addressFound) {
        state.addresses = [...state.addresses.filter(a => a.id !== id), action.payload]
      }
    })

    builder.addCase(deleteAddress.fulfilled, (state, action) => {
      const addressFound = state.addresses.find(a => a.id === action.payload)
      if (addressFound) {
        state.addresses = state.addresses.filter(a => a.id !== action.payload)
      }
    })
  }
})

export default addressesSlice.reducer