"use client";

import { configureStore } from "@reduxjs/toolkit";
import productFilterReducer from "./productFilterSlice";
import productsReducer from "./productsSlice";

// Configure the Redux store
const store = configureStore({
  reducer: {
    products: productsReducer,
    productFilter: productFilterReducer,
  },
});

// Type for the root state (state shape of the Redux store)
export type RootState = ReturnType<typeof store.getState>;

// Type for the dispatch function (used for type-safe dispatching in components)
export type AppDispatch = typeof store.dispatch;

export default store;
