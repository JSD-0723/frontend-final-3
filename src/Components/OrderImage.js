import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";

const ProductInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  padding: "20px 0px 0px",
  background: "var(--bright)",
}));

const Image = styled("img")(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "8px",
}));

const ItemDesc = styled("p")(({ theme }) => ({
  color: "var(--type-low-emphasis)",
}));

const BrandName = styled("p")(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
}));

const Price = styled("p")(({ theme }) => ({}));

const Discount = styled("p")(({ theme }) => ({}));

const DiscountedPrice = styled("p")(({ theme }) => ({}));

const PriceDetail = styled(Sheet)(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
}));

export const OrderImage = ({ price, discount, discountedPrice }) => {
  return (
    <>
      <ProductInfo>
        <Image src="/Assets/class.png" alt="" />
        <Sheet sx={{ background: "var(--bright)" }}>
          <BrandName>Coach</BrandName>
          <ItemDesc>Leather Coach Bag</ItemDesc>
          <ItemDesc>Qty- 1</ItemDesc>
          <PriceDetail>
            <DiscountedPrice></DiscountedPrice>
            <Price></Price>
            <Discount></Discount>
          </PriceDetail>
        </Sheet>
      </ProductInfo>
    </>
  );
};
