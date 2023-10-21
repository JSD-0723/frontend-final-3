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

export const ProductList = () => {
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
        <FlexedContainer>
          <OrderImage />
          <ProductElements>
            <Container>
              <FlexedContainer>
                <p>$54.69</p>
                <p>1</p>
                <p>$54.69</p>
              </FlexedContainer>
              <Sheet sx={{ textAlign: "center", background: "var(--bright)" }}>
                <RemoveButton variant="palin">Remove</RemoveButton>
              </Sheet>
            </Container>
          </ProductElements>
        </FlexedContainer>
        <FlexedContainer>
          <OrderImage />
          <ProductElements>
            <Container>
              <FlexedContainer>
                <p>$54.69</p>
                <p>1</p>
                <p>$54.69</p>
              </FlexedContainer>
              <Sheet sx={{ textAlign: "center", background: "var(--bright)" }}>
                <RemoveButton variant="palin">Remove</RemoveButton>
              </Sheet>
            </Container>
          </ProductElements>
        </FlexedContainer>

        <FlexedContainer>
          <OrderImage />
          <ProductElements>
            <Container>
              <FlexedContainer>
                <p>$54.69</p>
                <p>1</p>
                <p>$54.69</p>
              </FlexedContainer>
              <Sheet sx={{ textAlign: "center", background: "var(--bright)" }}>
                <RemoveButton variant="palin">Remove</RemoveButton>
              </Sheet>
            </Container>
          </ProductElements>
        </FlexedContainer>
      </Sheet>
    </>
  );
};
