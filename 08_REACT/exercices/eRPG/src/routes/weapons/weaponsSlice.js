import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_DB_URL } from "../../firebaseConfig";

export const fetchWeapons = createAsyncThunk(
  "weapons/fetchWeapons",
  async () => {
    const response = await axios.get(`${BASE_DB_URL}weapons.json`)

    if (response.status !== 200) {
      throw new Error("Something went wrong when getting the weapons...")
    }

    const tmpArray = []

    for (const key in response.data) {
      tmpArray.push({id: key, ...response.data[key]})
    }

    return tmpArray
  }
)

export const addWeapon = createAsyncThunk(
  "weapons/addWeapon",
  async (weaponValues, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.post(`${BASE_DB_URL}weapons.json?auth=${token}`, weaponValues)

      if (response.status !== 200) {
        throw new Error("Something went wrong when adding a weapon..")
      }

      return {id: response.data.name, ...weaponValues}
    }
  }
)

export const editWeapon = createAsyncThunk(
  "weapons/editWeapon",
  async ({id, ...weaponValues}, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.patch(`${BASE_DB_URL}weapons/${id}.json?auth=${token}`, weaponValues)

      if (response.status !== 200) {
        throw new Error("Something went wrong when editing a weapon..")
      }

      return {id, ...response.data}
    }
  }
)

export const deleteWeapon = createAsyncThunk(
  "weapons/deleteWeapon",
  async (weaponId, {getState}) => {
    const token = getState().authSlice.user.idToken
    if (token) {
      const response = await axios.delete(`${BASE_DB_URL}weapons/${weaponId}.json?auth=${token}`)

      if (response.status !== 200) {
        throw new Error("Something went wrong when deleting a weapon..")
      }

      return weaponId
    }
  }
)

const weaponsSlice = createSlice({
  name: "weapons",
  initialState: {
    weapons: [],
    isLoading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeapons.pending, (state) => {
      state.isLoading = true
      state.error = null
      state.weapons = []
    })

    builder.addCase(fetchWeapons.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchWeapons.fulfilled, (state, action) => {
      state.isLoading = false
      state.weapons = action.payload
    })

    builder.addCase(addWeapon.fulfilled, (state, action) => {
      state.weapons.push(action.payload)
    })

    builder.addCase(editWeapon.fulfilled, (state, action) => {
      const { id } = action.payload
      const foundWeapon = state.weapons.find(w => w.id === id)
      if (foundWeapon) {
        state.weapons = [...state.weapons.filter(w => w !== foundWeapon), action.payload]
      }
    })

    builder.addCase(deleteWeapon.fulfilled, (state, action) => {
      const foundWeapon = state.weapons.find(w => w.id === action.payload)
      if (foundWeapon) {
        state.weapons = state.weapons.filter(w => w !== foundWeapon)
      }
    })
  }
})

export default weaponsSlice.reducer