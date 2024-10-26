import { useState } from "react";
import css from "./AddProductModal.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/operations";

const initialFormState = {
  imageUrl: "",
  name: "",
  count: 0,
  size: {
    width: 0,
    height: 0,
  },
  weight: "",
  comments: [],
};

const AddProductModal = () => {
  const [formState, setFormState] = useState(initialFormState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === "width" && name === "height") {
      setFormState({ size: { [name]: value } });
    }
    setFormState({ [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addProduct({ formState }));
  };

  return (
    <>
      <h3 className={css.heading}>Add New Product</h3>
      <form className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            autoComplete="off"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Image link
          <input
            type="text"
            autoComplete="off"
            name="imageUrl"
            value={formState.imageUrl}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Number of products
          <input
            type="number"
            min="0"
            autoComplete="off"
            name="count"
            value={formState.count}
            onChange={handleChange}
            className={`${css.input} ${css.inputNumber}`}
          />
        </label>
        <h4 className={css.heading}>Size of the product</h4>
        <div className={css.sizeContainer}>
          <label className={css.label}>
            Width
            <input
              type="number"
              min="0"
              autoComplete="off"
              name="width"
              value={formState.width}
              onChange={handleChange}
              className={`${css.input} ${css.inputNumber}`}
            />
          </label>
          <label className={css.label}>
            Height
            <input
              type="number"
              min="0"
              autoComplete="off"
              name="height"
              value={formState.height}
              onChange={handleChange}
              className={`${css.input} ${css.inputNumber}`}
            />
          </label>
        </div>
        <label className={css.label}>
          Weight
          <input
            type="text"
            autoComplete="off"
            name="weight"
            value={formState.weight}
            onChange={handleChange}
            className={css.input}
          />
        </label>
        <button type="submit" className={css.button} onClick={handleSubmit}>
          Add
        </button>
      </form>
    </>
  );
};

export default AddProductModal;
