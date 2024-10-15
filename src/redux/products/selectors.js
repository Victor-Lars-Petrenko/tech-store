import { createSelector } from "reselect";
import { selectFilter } from "../filter/selectors";

export const selectProducts = createSelector(
  [state => state.products.items, selectFilter],
  (products, filter) => {
    if (!products) return [];

    switch (filter) {
      case "A to Z":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "Z to A":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "popularity":
        return [...products].sort(
          (a, b) => b.comments.length - a.comments.length
        );
      case "quantity":
        return [...products].sort((a, b) => b.count - a.count);
      default:
        return products;
    }
  }
);

export const selectProductsLoading = state => state.products.isLoading;

export const selectProductsError = state => state.products.error;
