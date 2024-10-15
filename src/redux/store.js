import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products/slice";
import filterReducer from "./filter/slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter: filterReducer,
  },
});
