import { Product } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of the state for product filtering
interface productFilterState {
  allProducts: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  sortOption: string;
  categoryFilter: string;
  priceRange: { min: number | null; max: number | null };
}

// Initial state for the product filter slice
const initialState: productFilterState = {
  allProducts: [],
  filteredProducts: [],
  searchQuery: "",
  sortOption: "",
  categoryFilter: "All",
  priceRange: { min: null, max: null },
};

// Create a Redux slice for managing product filtering
const productFilterSlice = createSlice({
  name: "filtered-products",
  initialState,
  reducers: {
    // Set all products and initialize the filteredProducts array
    setProducts(state, action: PayloadAction<Product[]>) {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },

    // Update the search query and reapply filters
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
      state.filteredProducts = applyFilters(state);
    },

    // Update the sorting option and reapply filters
    setSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
      state.filteredProducts = applyFilters(state);
    },

    // Update the category filter and reapply filters
    setCategoryFilter(state, action: PayloadAction<string>) {
      state.categoryFilter = action.payload;
      state.filteredProducts = applyFilters(state);
    },

    // Update the price range filter and reapply filters
    setPriceRange(state, action: PayloadAction<{ min: number; max: number }>) {
      state.priceRange = action.payload;
      state.filteredProducts = applyFilters(state);
    },
  },
});

export const {
  setProducts,
  setSearchQuery,
  setSortOption,
  setCategoryFilter,
  setPriceRange,
} = productFilterSlice.actions;

export default productFilterSlice.reducer;

/**
 * Function to apply all filters and sorting to the product list
 * @param state - Current state of the product filter slice
 * @returns Filtered and sorted array of products
 */

function applyFilters(state: productFilterState): Product[] {
  let filtered = [...state.allProducts];

  // Apply search query filter
  if (state.searchQuery) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
    );
  }

  // Apply category filter
  if (state.categoryFilter !== "All") {
    filtered = filtered.filter(
      (product) => product.category === state.categoryFilter,
    );
  }

  // Apply price range filter
  filtered = filtered.filter((product) => {
    const minCondition =
      state.priceRange.min !== null
        ? product.price >= state.priceRange.min
        : true; // Check minimum price condition
    const maxCondition =
      state.priceRange.max !== null
        ? product.price <= state.priceRange.max
        : true; // Check maximum price condition

    return minCondition && maxCondition; // Product must satisfy both conditions
  });

  // Apply sorting
  if (state.sortOption === "Low to High") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortOption === "High to Low") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return filtered; // Return the filtered and sorted array
}
