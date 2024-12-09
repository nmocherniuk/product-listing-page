"use client";

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// Type for the root state (state shape of the Redux store)
export type RootState = ReturnType<typeof store.getState>;

// Type for the dispatch function (used for type-safe dispatching in components)
export type AppDispatch = typeof store.dispatch;

export default store;
