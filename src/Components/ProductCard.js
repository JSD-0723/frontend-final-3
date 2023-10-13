import { Sheet } from "@mui/joy";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/joy/styles";

const CardInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "420px",
  background: "var(--bright)",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
}));

const Brandname = styled("h4")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "var(--medium-font)",
}));

const ItemName = styled("h5")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "var(--extra-light-font)",
}));

const Price = styled("p")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "var(--medium-font)",
}));

export const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Sheet sx={{ background: "var(--bright)" }}>
          <Image src={require(`../Assets/class.png`)} />
          <CardInfo>
            <Sheet sx={{ background: "var(--bright)" }}>
              <Brandname>Grande</Brandname>
              <ItemName>{item.title}</ItemName>
              <Price>${item.price}</Price>
            </Sheet>
            <Sheet sx={{ background: "var(--bright)" }}>
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </Sheet>
          </CardInfo>
        </Sheet>
      ))}
    </>
  );
};
// require(`${item.imageUrl}`)}
