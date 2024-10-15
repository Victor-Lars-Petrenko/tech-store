import css from "./Products.module.css";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "../../redux/products/selectors";
import Filter from "components/Filter/Filter";

const Products = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);

  return (
    <main className={css.homeContainer}>
      <h1>Products</h1>
      <Filter />
      {!error && !isLoading && products[0] && (
        <ul className={css.productList}>
          {products.map(
            ({
              id,
              imageUrl,
              name,
              count,
              size: { height, width },
              weight,
              comments,
            }) => (
              <li key={id} className={css.productCard}>
                <img src={imageUrl} alt={name} />
                <div className={css.productCardTitle}>
                  <h2 className={css.productCardTitle}>{name}</h2>
                  <p className={css.productCardDescription}>{count}</p>
                  <p className={css.productCardDescription}>{weight}</p>
                  <p className={css.productCardDescription}>
                    {comments.length}
                  </p>
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
