import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";
import { pending, rejected } from "../../assets/functions/redux";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, pending)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, rejected);
  },
});

export default productsSlice.reducer;
