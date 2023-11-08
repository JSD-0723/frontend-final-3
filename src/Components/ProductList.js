import { Button, Divider, Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { OrderImage } from "./OrderImage";

const FlexedContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "var(--bright)",
  padding: "3px 7px",
}));

const ProductElements = styled(Sheet)(({ theme }) => ({
  width: "40%",
}));

const TableHeader = styled("p")(({ theme }) => ({
  color: "var(--type-low-emphasis)",
  fontWeight: "var(--medium-font)",
}));

const RemoveButton = styled(Button)(({ theme }) => ({
  color: "var(--error)",
  textDecoration: "underline",
}));

const Container = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const ProductList = ({ cart, removeProductHandler }) => {
  return (
    <>
      <FlexedContainer>
        <Sheet
          sx={{
            background: "var(--bright)",
          }}>
          <TableHeader>Product Name</TableHeader>
        </Sheet>
        <ProductElements>
          <FlexedContainer>
            <TableHeader>Price</TableHeader>
            <TableHeader>Qty</TableHeader>
            <TableHeader>Subtotal</TableHeader>
          </FlexedContainer>
        </ProductElements>
      </FlexedContainer>
      <Divider />
      <Sheet sx={{ display: "flex", flexDirection: "column" }}>
        {cart.map((item, index) => (
          <FlexedContainer key={index}>
            <OrderImage
              imageUrl={item.productImage}
              productInfo={item.productInfo}
              count={item.count}
            />
            <ProductElements>
              <Container>
                <FlexedContainer>
                  <p>${item.productInfo.price}</p>
                  <p>{item.count}</p>
                  <p>${item.totalPrice}</p>
                </FlexedContainer>
                <Sheet
                  sx={{ textAlign: "center", background: "var(--bright)" }}>
                  <RemoveButton
                    onClick={() => removeProductHandler(item.productId)}
                    variant="palin">
                    Remove
                  </RemoveButton>
                </Sheet>
              </Container>
            </ProductElements>
          </FlexedContainer>
        ))}
      </Sheet>
    </>
  );
};
