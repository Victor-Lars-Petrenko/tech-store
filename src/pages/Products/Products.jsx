import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectProducts,
  selectProductsError,
  selectProductsLoading,
} from "../../redux/products/selectors";
import Filter from "components/Filter/Filter";
import css from "./Products.module.css";

const Products = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsLoading);
  const error = useSelector(selectProductsError);
  const navigate = useNavigate();

  const handleProductClick = id => {
    navigate(`/product/${id}`);
  };

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
              <li
                key={id}
                className={css.productCard}
                onClick={() => handleProductClick(id)}
              >
                <img src={imageUrl} alt={name} />
                <div className={css.productCardTitle}>
                  <h2 className={css.productCardTitle}>{name}</h2>
                  <p className={css.productCardDescription}>Count: {count}</p>
                  <p className={css.productCardDescription}>Weight: {weight}</p>
                  <p className={css.productCardDescription}>
                    Size: {width}x{height} px
                  </p>
                  <p className={css.productCardDescription}>
                    Comments: {comments.length}
                  </p>
                </div>
                <div className={css.buttons}>
                  <button
                    className={css.button}
                    onClick={e => e.stopPropagation()}
                  >
                    Edit
                  </button>
                  <button
                    className={css.button}
                    onClick={e => e.stopPropagation()}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
          )}
        </ul>
      )}
    </main>
  );
};

export default Products;
