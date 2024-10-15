import { createAsyncThunk } from "@reduxjs/toolkit";
import * as productsApi from "../../api/products-api";

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await productsApi.getProductsRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
