import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";

const Products = lazy(() => import("../pages/Products"));
const ProductPage = lazy(() => import("../pages/ProductPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Products />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
