import { Sheet } from "@mui/joy";
import { AddressForm } from "../Components/AddressForm";
import { SectionTitle } from "../Components/SectionTitle";
import { Divider } from "@mui/material";
import { OrderImage } from "../Components/OrderImage";
import { PageTitle } from "../Components/PageTitle";
import { styled } from "@mui/joy/styles";
import { OrderSummary } from "../Components/OrderSummary";

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
  return (
    <>
      <PageTitle text={"Checkout"} />
      <ContainerAll>
        <Sheet sx={{ width: "55vw" }}>
          <AddressForm />
        </Sheet>
        <RightSide>
          <Sheet sx={{ width: "30vw" }}>
            <SectionTitle text={"Order Summary"} />
            <Divider />
            <OrderImage />
            <OrderImage />
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
