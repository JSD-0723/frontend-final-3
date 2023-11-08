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
  const [count, setCount] = useState(1);

  useEffect(() => {
    loadProductDetails(productId).then((response) => {
      setDetails(response.data);
    });
  }, [productId]);

  const productInfo = details.product;
  const productImage = productInfo?.imageUrl;
  const productPrice = productInfo?.price;
  const totalPrice = productPrice * count;

  const localStorageHandler = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const findIdIndex = cart.findIndex(
      (product) => product.productId === productId
    );
    const newProduct = {
      productInfo,
      productImage,
      count,
      productId,
      totalPrice,
    };
    if (findIdIndex !== -1) {
      // If the product exists in the cart, update the count
      cart[findIdIndex].count += count;
    } else {
      // If the product doesn't exist, add it to the cart
      cart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const images = [
    productImage,
    "/Assets/class.png",
    "/Assets/chanel.png",
    "/Assets/biba.png",
  ];

  return (
    <>
      <Sheet>
        <ImageSlider images={images} />
        <ProductInfo
          count={count}
          setCount={setCount}
          onClick={localStorageHandler}
          details={details}
        />
      </Sheet>
      <ProductDescription details={details} />
    </>
  );
};
