import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "@/types";

// Asynchronous thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (_, { dispatch }) => {
    const url = process.env.NEXT_PUBLIC_PRODUCTS_URL;
    if (!url) throw new Error("Url data is not defined");
    const response = await axios.get(url);
    return response.data;
  },
);

// Interface for the products slice state
interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Initial state for the products slice
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

// Create a Redux slice for managing product data
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the pending state when fetching products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // Handle the fulfilled state when fetching products is successful
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.products = action.payload;
        },
      )

      // Handle the rejected state when fetching products fails
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productsSlice.reducer;
