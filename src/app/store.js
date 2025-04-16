import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../features/counter/counterSlicer'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  },
})