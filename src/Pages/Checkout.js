import { Sheet } from "@mui/joy";
import { AddressForm } from "../Components/AddressForm";
import { SectionTitle } from "../Components/SectionTitle";
import { Divider } from "@mui/material";
import { OrderImage } from "../Components/OrderImage";
import { PageTitle } from "../Components/PageTitle";
import { styled } from "@mui/joy/styles";
import { OrderSummary } from "../Components/OrderSummary";
import { AccordionComponent } from "../Components/AccordionComponent";
import { PlaceOrder } from "../Components/PlaceOrder";

const ContainerAll = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  background: "var(--bright)",
  paddingBottom: "30px",
}));

export const Checkout = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <>
      <PageTitle text={"Checkout"} />
      <ContainerAll>
        <Sheet sx={{ width: "55vw" }}>
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
        </Sheet>
        <RightSide>
          <Sheet sx={{ width: "30vw" }}>
            <SectionTitle text={"Order Summary"} />
            <Divider />
            {cart.map((item) => (
              <OrderImage
                imageUrl={item.productImage}
                productInfo={item.productInfo}
                count={item.count}
              />
            ))}
          </Sheet>
          <Sheet sx={{ background: "var(--bright)" }}>
            <SectionTitle text={"Order Details"} />
            <OrderSummary showButtons={false} />
          </Sheet>
        </RightSide>
      </ContainerAll>
    </>
  );
};
