import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./reducers/contact"

const store = configureStore({
  reducer: {
    contact: addReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
