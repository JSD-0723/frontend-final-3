import { Sheet } from "@mui/joy";
import { ProductCard } from "./ProductCard";

export const ProductDescription = ({ details }) => {
  const productInfo = details.product;
  const productReview = details.ratingReviews;
  const relatedProducts = details.relatedProducts;

  return (
    <>
      <p>{productInfo?.description}</p>
      {productReview?.map((review) => (
        <div key={review.id}>
          <p>{review.title}</p>
          <p>{review.description}</p>
          <p>{review.rating}</p>
          <Sheet sx={{ width: "200px" }}>
            <ProductCard products={relatedProducts} />
          </Sheet>
        </div>
      ))}
    </>
  );
};