import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppRoutes from "./AppRoutes";

import { fetchProducts } from "../redux/products/operations";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
