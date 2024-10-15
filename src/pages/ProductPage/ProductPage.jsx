const ProductPage = ({
  imageUrl,
  name,
  count,
  size: { height, width },
  weight,
  comments,
}) => {
  return (
    <main>
      <h1>{name}</h1>
    </main>
  );
};

export default ProductPage;
