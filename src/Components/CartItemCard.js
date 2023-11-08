import { Button, Divider, Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";

const Container = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  width: "100%",
  margin: "0 auto",
  padding: "7px",
  borderRadius: "8px",
}));

const ProductInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "17px",
  padding: "20px 0px",
  background: "var(--bright)",
  width: "100%",
}));

const Image = styled("img")(({ theme }) => ({
  width: "130px",
  height: "130px",
  borderRadius: "8px",
}));

const ItemDesc = styled("p")(({ theme }) => ({
  color: "var(--type-low-emphasis)",
}));

const BrandName = styled("p")(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
}));

const QtySelect = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  background: "var(--grey)",
  padding: "7px",
  borderRadius: "8px",
  width: "50%",
  margin: "8px 0px",
}));

const DiscountedPrice = styled("p")(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "var(--bold-font)",
}));

const Price = styled("p")(({ theme }) => ({
  textDecoration: "line-through",
  color: "var(--type-low-emphasis)",
}));

const Discount = styled("p")(({ theme }) => ({
  color: "var(--error)",
  fontSize: ".85rem",
}));

const PriceDetail = styled(Sheet)(({ theme }) => ({
  fontWeight: "var(--semi-bold-font)",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  background: "var(--bright)",
}));

const RemoveButton = styled(Button)(({ theme }) => ({
  width: "100%",
  color: "var(--primary)",
  fontSize: "1.1rem",
  padding: "10px 0px",
}));

export const CartItemCard = ({ cart, removeProductHandler }) => {
  return (
    <>
      {cart.map((item) => (
        <Container>
          <ProductInfo>
            <Image src={item.productImage} alt="" />
            <Sheet sx={{ background: "var(--bright)" }}>
              <BrandName>{item.productInfo.brand}</BrandName>
              <ItemDesc>{item.productInfo.title}</ItemDesc>
              <QtySelect>
                <ItemDesc>Qty: {item.count}</ItemDesc>
              </QtySelect>
              {item.productInfo.discount ? (
                // Render DiscountedPrice when there is a discount
                <PriceDetail>
                  <DiscountedPrice>
                    ${item.productInfo.discountedPrice}
                  </DiscountedPrice>
                  <Price>${item.productInfo.price}</Price>
                  <Discount>{item.productInfo.discount}% OFF</Discount>
                </PriceDetail>
              ) : (
                // Render Price when there is no discount
                <PriceDetail>
                  <DiscountedPrice>${item.productInfo.price}</DiscountedPrice>
                </PriceDetail>
              )}
            </Sheet>
          </ProductInfo>
          <Divider />
          <RemoveButton
            onClick={() => removeProductHandler(item.productId)}
            variant="plain">
            Remove
          </RemoveButton>
        </Container>
      ))}
    </>
  );
};