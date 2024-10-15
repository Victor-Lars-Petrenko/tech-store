import css from "./Products.module.css";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "../../redux/products/selectors";

const Products = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  return (
    <main className={css.homeContainer}>
      <h1>Products</h1>
      {!error && !isLoading && products[0] && (
        <ul className={css.productList}>
          {products.map(
            ({ id, imageUrl, name, count, size, weight, comments }) => (
              <li key={id} className={css.productCard}>
                <div>
                  <h2 className={css.productCardTitle}>{name}</h2>
                  <p className={css.productCardDescription}>{count}</p>
                </div>
                <div className={css.buttons}></div>
              </li>
            )
          )}
        </ul>
      )}
    </main>
  );
};

export default Products;
