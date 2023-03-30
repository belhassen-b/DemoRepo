import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../firebaseConfig";

export const fetchAlbums = createAsyncThunk(
  "albums/fetchAlbums",
  async () => {
    const response = await fetch(`${BASE_DB_URL}albums.json`)

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des albums !")
    }

    const data = await response.json()

    const tmpArray = []

    for (const key in data) {
      tmpArray.push({id: key, ...data[key]})
    }

    return tmpArray
  }
)

export const addAlbum = createAsyncThunk(
  "albums/addAlbum",
  async (albumValues, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await fetch(`${BASE_DB_URL}albums.json?auth=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(albumValues)
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout d'un album !")
      }

      const data = await response.json()

      return {id: data.name, ...albumValues}
    }
  }
)

export const editAlbum = createAsyncThunk(
  "albums/editAlbum",
  async ({id, ...albumValues}, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await fetch(`${BASE_DB_URL}albums/${id}.json?auth=${token}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(albumValues)
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'édition d'un album !")
      }

      const data = await response.json()

      return {id, ...data}
    }
  }
)

export const deleteAlbum = createAsyncThunk(
  "albums/deleteAlbum",
  async (id, {getState}) => {
    const token = getState().auth.user.idToken
    if (token) {
      const response = await fetch(`${BASE_DB_URL}albums/${id}.json?auth=${token}`, {
        method: "DELETE"
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression d'un album !")
      }

      return id
    }
  }
)

const albumsSlice = createSlice({
  name: "albums",
  initialState: {
    albums: [],
    isLoading: false,
    error: null
  }, 
  extraReducers : (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.albums = []
      state.isLoading = true
      state.error = null
    })

    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false
      state.albums = action.payload
    })

    builder.addCase(addAlbum.fulfilled, (state, action) => {
      state.albums.push(action.payload)
    })

    builder.addCase(deleteAlbum.fulfilled, (state, action) => {
      const albumFound = state.albums.find(a => a.id === action.payload)
      if (albumFound) {
        state.albums = state.albums.filter(a => a !== albumFound)
      }
    })

    builder.addCase(editAlbum.fulfilled, (state, action) => {
      const { id } = action.payload
      const albumFound = state.albums.find(a => a.id === id)
      if (albumFound) {
        state.albums = [...state.albums.filter(a => a !== albumFound), action.payload]
      }
    })
  }
})

export default albumsSlice.reducer