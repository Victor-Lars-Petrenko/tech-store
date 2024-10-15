import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/products/selectors";
import css from "./ProductPage.module.css";

const ProductPage = () => {
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  const { imageUrl, name, count, size, weight, comments } = product;

  return (
    <div className={css.productContainer}>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>Count: {count}</p>
      <p>
        Size: {size.width}x{size.height} px
      </p>
      <p>Weight: {weight}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
