import { Sheet } from "@mui/joy";
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
      <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs" sx={{ mx: 2, mt: 2, width: 'fit-content', }}>
        <Link to="/" style={{ textDecoration: "none", color: '#1B4B66' }}>
          Home
        </Link>
        <Link to={`/category?brandName=${productInfo?.brand}`} style={{ textDecoration: "none", color: '#1B4B66' }}>
          {productInfo?.brand}
        </Link>
        <Typography sx={{ color: "#626262" }}> {productInfo?.title} </Typography>
      </Breadcrumbs>

      <Sheet sx={{
        display: 'flex',
        flexDirection: {
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
        mb: 7,
      }}>
        <Sheet sx={{
          flex: '50%', px: 3,
          mb: {
            xs: 6,
            sm: 6,
            md: 0,
            lg: 0,
            xl: 0,
          },
        }}>
          <ImageSlider images={images} />
        </Sheet>
        <Sheet sx={{
          flex: '50%',
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
          />
        </Sheet>
      </Sheet>
      <ProductDescription details={details} />
    </>
  );
};