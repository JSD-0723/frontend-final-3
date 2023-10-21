import { Button, Divider, Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";

const Title = styled("h3")(({ theme }) => ({
  fontSize: "1.05rem",
  fontWeight: "var(--semi-bold-font)",
  padding: "4px  0",
}));

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
  paddingTop: "15px",
}));

const LeftSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  paddingRight: "20px",
}));

const PriceDetail = styled("p")(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
  color: "var(--type-low-emphasis)",
}));

const Values = styled("p")(({ theme }) => ({
  fontWeight: "var(--medium-font)",
}));

export const OrderSummary = () => {
  return (
    <>
      <Title>Order Summary</Title>
      <Divider />
      <Container>
        <LeftSide>
          <PriceDetail>Sub Total</PriceDetail>
          <PriceDetail>Discount</PriceDetail>
          <PriceDetail>Delivery Fee</PriceDetail>
          <h4>Grand Total</h4>
        </LeftSide>
        <RightSide>
          <Values>$119.69</Values>
          <Values>-$13.40</Values>
          <Values>-$0.00</Values>
          <h4>$106.29</h4>
        </RightSide>
      </Container>
      <Container>
        <Button as={Link} to="/checkout">
          Proceed to Checkout
        </Button>
        <Button as={Link} to="/">
          Continue Shopping
        </Button>
      </Container>
    </>
  );
};
