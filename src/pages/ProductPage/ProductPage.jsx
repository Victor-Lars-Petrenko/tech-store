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
    <div className={css.productPage}>
      <div className={css.imageContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={css.detailsContainer}>
        <h1>{name}</h1>
        <p>Count: {count}</p>
        <p>
          Size: {size.width} x {size.height}
        </p>
        <p>Weight: {weight}</p>
        <div className={css.buttonsContainer}>
          <button className={`${css.button} ${css.editButton}`}>
            Edit Product
          </button>
          <button className={`${css.button} ${css.deleteButton}`}>
            Delete Product
          </button>
        </div>
        <h2>Comments</h2>
        <ul className={css.commentsList}>
          {comments.map(comment => (
            <li key={comment.id} className={css.commentItem}>
              <p className={css.commentText}>{comment.description}</p>
              <p className={css.commentDate}>Added: {comment.date}</p>
              <div className={css.commentButtons}>
                <button className={`${css.button} ${css.editButton}`}>
                  Edit
                </button>
                <button className={`${css.button} ${css.deleteButton}`}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className={`${css.button} ${css.addCommentButton}`}>
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
