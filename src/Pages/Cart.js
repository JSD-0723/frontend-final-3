import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { PageTitle } from "../Components/PageTitle";
import { ProductList } from "../Components/ProductList";
import { OrderSummary } from "../Components/OrderSummary";
import { CartItemCard } from "../Components/CartItemCard";
import { SectionTitle } from "../Components/SectionTitle";
import { useState, useEffect } from "react";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import { KeyboardArrowRight } from "@mui/icons-material";

const Container = styled(Sheet)(({ theme }) => ({
  background: '"var(--bright)"',
  border:0,
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 7px 30px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
}));

const MediumScreenContainer = styled(Sheet)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  border: 0
}));

const LeftSideContainer = styled(Sheet)(({ theme }) => ({
  width: "60vw",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightSideContainer = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  width: "27vw",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  const removeProductHandler = (productId) => {
    const updatedCart = cart.filter((item) => item.productId !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
      <Sheet sx={{p:3, m:0}}>
        <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs" sx={{m:0, p:0}}>
          <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "#1B4B66" }}>Home</Typography>
          <Typography sx={{ color: "#626262" }}>My Cart</Typography>
        </Breadcrumbs>

        <Typography level="h2" sx={{ color: "#1B4B66", my: 2.8, fontWeight: 500 }}  >
          My Cart
        </Typography>

        <Container>
          <MediumScreenContainer>
            <Sheet
              sx={{
                display: {
                  lg: "none",
                  md: "none",
                  sm: "none",
                  xs: "block",
                },
                border: 0
              }}>
              <CartItemCard
                removeProductHandler={removeProductHandler}
                cart={cart}
              />
            </Sheet>
            <LeftSideContainer
              sx={{
                display: {
                  lg: "block",
                  md: "block",
                  sm: "block",
                  xs: "none",
                },
              }}>
              <ProductList
                cart={cart}
                removeProductHandler={removeProductHandler}
              />
            </LeftSideContainer>
          </MediumScreenContainer>
          <MediumScreenContainer>
            <RightSideContainer>
              <SectionTitle text={"Order Summary"} />
              <OrderSummary cart={cart} />
            </RightSideContainer>
          </MediumScreenContainer>
        </Container>
      </Sheet>
    </>
  );
};