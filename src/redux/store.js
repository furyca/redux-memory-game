import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './frameworksSlice.js'

export const store = configureStore({
  reducer: {
    frameworksSlice: sliceReducer
  },
})