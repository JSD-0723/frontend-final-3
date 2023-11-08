import { Button, Divider, Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
  paddingTop: "15px",
}));

const LeftSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  lineHeight: 2,
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  textAlign: "end",
  paddingRight: 9,
  lineHeight: 2,
}));

const PriceDetail = styled("p")(({ theme }) => ({
  fontWeight: 400,
  color: "var(--type-low-emphasis)",

}));

const Values = styled("p")(({ theme }) => ({
  fontWeight: 500,
  color: '#171520',
}));

export const OrderSummary = ({ showButtons = true }) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let subTotal = 0;
  for (const item of cart) {
    if (item.totalPrice) {
      subTotal += item.totalPrice;
    }
  }
  return (
    <>
      <Divider />
      <Container>
        <LeftSide>
          <PriceDetail>Sub Total</PriceDetail>
          <PriceDetail>Discount</PriceDetail>
          <PriceDetail>Delivery Fee</PriceDetail>
          <h4>Grand Total</h4>
        </LeftSide>
        <RightSide>
          <Values>${subTotal}</Values>
          <Values>-$13.40</Values>
          <Values>$12.00</Values>
          <h4>${subTotal - 13.4 + 12}</h4>
        </RightSide>
      </Container>
      {showButtons && (
        <Sheet sx={{display: 'flex', gap: 3, mt:3}}>
          <Button as={Link} to="/checkout" sx={{backgroundColor: "var(--primary)", flex: '45%', border: 0, borderRadius: 8, fontWeight: 500}}>
            Place Order
          </Button>
          <Button
            as={Link}
            to="/"
            variant="outlined"
            sx={{
              color: "var(--primary)",
              borderColor: "var(--primary)",
              flex: '45%',
              borderRadius: 8,
              fontWeight: 500,
              border:2
            }}>
            Continue Shopping
          </Button>
        </Sheet>
      )}
    </>
  );
};
