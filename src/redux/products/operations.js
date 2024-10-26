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

export const addProduct = createAsyncThunk(
  "products/add",
  async ({ body }, { rejectWithValue }) => {
    try {
      const { data } = await productsApi.AddProductRequest(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
