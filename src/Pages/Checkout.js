import { Box } from "@mui/joy";
import { AddressForm } from "../Components/AddressForm";
import { SectionTitle } from "../Components/SectionTitle";
import { Divider } from "@mui/material";
import { OrderImage } from "../Components/OrderImage";
import { styled } from "@mui/joy/styles";
import { OrderSummary } from "../Components/OrderSummary";
import { AccordionComponent } from "../Components/AccordionComponent";
import { PlaceOrder } from "../Components/PlaceOrder";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";
import { KeyboardArrowRight } from "@mui/icons-material";


const RightSide = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: "column",
  gap: "50px",
}));

export const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <Box sx={{ p: 3, m: 0, }}>
      <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs" sx={{ m: 0, p: 0 }}>
        <Typography component={Link} to="/" sx={{ textDecoration: "none", color: "#1B4B66" }}>Home</Typography>
        <Typography sx={{ color: "#626262" }}>My Cart</Typography>
      </Breadcrumbs>

      <Typography level="h2" sx={{ color: "#1B4B66", my: 2.8, fontWeight: 500 }}  >
        Checkout
      </Typography>



      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row',
          xl: 'row',
        },
        gap: {
          xs: 0,
          sm: 0,
          md: 16,
          lg: 20,
          xl: 20,
        },
      }}>
        <Box sx={{ flex: '62%', }}>
          <RightSide>
            <AccordionComponent
              Content={<AddressForm />}
              title={<SectionTitle text={"Add New Address"} />}
            />
            <AccordionComponent
              Content={<PlaceOrder />}
              title={<SectionTitle text={"Place Order"} />}
            />
          </RightSide>
        </Box>
        <Box sx={{ flex: '38%', }}>
          <Box sx={{ background: "var(--bright)", mb: 7, }}>
            <SectionTitle text={"Order Summary"} />
            <Divider sx={{ mb: 2 }} />
            {cart.map((item) => (
              <OrderImage
                imageUrl={item.productImage}
                productInfo={item.productInfo}
                count={item.count}
              />
            ))}
          </Box>
          <Box sx={{ background: "var(--bright)" }}>
            <SectionTitle text={"Order Details"} />
            <OrderSummary showButtons={false} />
          </Box>
        </Box>
      </Box>
    </Box>

  );
};