import { Divider, Sheet } from "@mui/joy";
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

export const ProductList = () => {
  return (
    <>
      <FlexedContainer>
        <Sheet>
          <p>Product Name</p>
        </Sheet>
        <ProductElements>
          <FlexedContainer>
            <p>Price</p>
            <p>Qty</p>
            <p>Subtotal</p>
          </FlexedContainer>
        </ProductElements>
      </FlexedContainer>
      <Divider />
      <FlexedContainer>
        <ProductInfo>
          <Image src="/Assets/class.png" alt="" />
          <Sheet sx={{ background: "var(--bright)" }}>
            <p>Coach</p>
            <p>Leather Coach Bag</p>
            <p>Qty- 1</p>
          </Sheet>
        </ProductInfo>
        <ProductElements>
          <FlexedContainer>
            <p>$54.69</p>
            <p>1</p>
            <p>$54.69</p>
          </FlexedContainer>
        </ProductElements>
      </FlexedContainer>
    </>
  );
};
