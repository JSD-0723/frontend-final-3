import { Button, Divider, Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";

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

const Image = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
}));

const ProductInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  padding: "20px 10px",
  background: "var(--bright)",
}));

const TableHeader = styled("p")(({ theme }) => ({
  color: "var(--type-low-emphasis)",
  fontWeight: "var(--medium-font)",
}));

const ItemDesc = styled("p")(({ theme }) => ({
  color: "var(--type-low-emphasis)",
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
      <FlexedContainer>
        <ProductInfo>
          <Image src="/Assets/class.png" alt="" />
          <Sheet sx={{ background: "var(--bright)" }}>
            <p>Coach</p>
            <ItemDesc>Leather Coach Bag</ItemDesc>
            <ItemDesc>Qty- 1</ItemDesc>
          </Sheet>
        </ProductInfo>
        <ProductElements>
          <Container>
            <FlexedContainer>
              <p>$54.69</p>
              <p>1</p>
              <p>$54.69</p>
            </FlexedContainer>
            <Sheet sx={{ textAlign: "center" }}>
              <RemoveButton variant="palin">Remove</RemoveButton>
            </Sheet>
          </Container>
        </ProductElements>
      </FlexedContainer>
    </>
  );
};
