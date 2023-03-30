import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0
  },
  reducers: {
    increment(state) {
      state.counterValue += 1
    },
    decrement(state) {
      state.counterValue -= state.counterValue >= 1 ? 1 : 0
    },
    incrementByAmount(state, action) {
      state.counterValue += action.payload
    },
    decrementByAmount(state, action) {
      state.counterValue -= state.counterValue - action.payload >= 0 ? action.payload : 0
    }
  }
})

export const { increment, incrementByAmount, decrement, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer