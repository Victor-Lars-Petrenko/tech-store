import { useState } from "react";

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
  const handleChange = e => {
    const { name, value } = e.target;

    if (name === "width" && name === "height") {
      setFormState({ size: { [name]: value } });
    }
    setFormState({ [name]: value });
  };

  return (
    <>
      <h3>Add New Product</h3>
      <form>
        <label>
          Name
          <input
            type="text"
            autocopmlete="off"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Image link
          <input
            type="text"
            autocopmlete="off"
            name="imageUrl"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of products
          <input
            type="number"
            autocopmlete="off"
            name="count"
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddProductModal;
