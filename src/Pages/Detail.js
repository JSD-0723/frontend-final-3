import { Box } from "@mui/joy";
import { ImageSlider } from "../Components/ImageSlider";
import { ProductInfo } from "../Components/ProductInfo";
import { useEffect, useState } from "react";
import { loadProductDetails } from "../Shared/API/FetchData";
import { useParams } from "react-router-dom";
import { ProductDescription } from "../Components/ProductDescription";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";

export const Detail = () => {
  const { productId } = useParams();
  const [details, setDetails] = useState([]);
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const productPrice = details.product?.price;

  useEffect(() => {
    loadProductDetails(productId).then((response) => {
      setDetails(response.data);
    });
  }, [productId]);

  useEffect(() => {
    setTotalPrice(productPrice * count);
  }, [count, details]);

  const productInfo = details.product;
  const productImage = productInfo?.imageUrl;
  const availableInStock = productInfo?.availableInStock;
  const altImages = productInfo?.images;
  console.log(altImages);

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const localStorageHandler = () => {
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
      cart[findIdIndex].count += count;
      cart[findIdIndex].totalPrice = (
        productPrice * cart[findIdIndex].count
      ).toFixed(2);
    } else {
      cart.push(newProduct);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <Breadcrumbs
        separator={<KeyboardArrowRight />}
        aria-label="breadcrumbs"
        sx={{ mx: 2, mt: 2, width: "fit-content" }}>
        <Link to="/" style={{ textDecoration: "none", color: "#1B4B66" }}>
          Home
        </Link>
        <Link
          to={`/category?brandName=${productInfo?.brand}`}
          style={{ textDecoration: "none", color: "#1B4B66" }}>
          {productInfo?.brand}
        </Link>
        <Typography sx={{ color: "#626262" }}>{productInfo?.title}</Typography>
      </Breadcrumbs>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
          },
          mb: 7,
        }}>
        <Box
          sx={{
            flex: "50%",
            px: 3,
            mb: {
              xs: 6,
              sm: 6,
              md: 0,
              lg: 0,
              xl: 0,
            },
          }}>
          <ImageSlider altImages={altImages} />
        </Box>
        <Box
          sx={{
            flex: "50%",
            pl: {
              xs: 3,
              sm: 3,
              md: 0,
              lg: 0,
              xl: 0,
            },
            pr: 3,
          }}>
          <ProductInfo
            count={count}
            setCount={setCount}
            onClick={localStorageHandler}
            details={details}
            availableInStock={availableInStock}
            cart={cart}
          />
        </Box>
      </Box>
      <ProductDescription details={details} />
    </>
  );
};
