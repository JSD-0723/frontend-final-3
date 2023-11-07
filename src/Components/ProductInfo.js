export const ProductInfo = ({ details }) => {
  const productInfo = details.product;

  return (
    <>
      <p>{productInfo?.brand}</p>
      <p>{productInfo?.title}</p>
      <p>{productInfo?.totalRating}</p>
      <p>{productInfo?.price}</p>
    </>
  );
};
