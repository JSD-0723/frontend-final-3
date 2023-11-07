import { Sheet } from "@mui/joy";
import { ImageSlider } from "../Components/ImageSlider";
import { ProductInfo } from "../Components/ProductInfo";
import { useEffect, useState } from "react";
import { loadProductDetails } from "../Shared/API/FetchData";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../Components/ProductDescription";

export const Detail = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    loadProductDetails(productId).then((response) => {
      setDetails(response.data);
    });
  }, [productId]);

  const productInfo = details.product;
  const productImage = productInfo?.imageUrl;
  console.log(productImage);

  const images = [
    productImage,
    "/Assets/class.png",
    "/Assets/chanel.png",
    "/Assets/biba.png",
  ];

  return (
    <>
      <Sheet sx={{ display: "flex", justifyContent: "space-around" }}>
        <ImageSlider images={images} />
        <ProductInfo details={details} />
      </Sheet>
      <ProductDescription details={details} />
    </>
  );
};