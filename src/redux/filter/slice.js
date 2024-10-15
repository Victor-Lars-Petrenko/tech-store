import { createSlice } from "@reduxjs/toolkit";
import { setFilter } from "./actions";

const initialState = "A to Z";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFilter, (_, { payload }) => payload);
  },
});

export default filterSlice.reducer;
