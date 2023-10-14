import { Sheet } from "@mui/joy";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";

const CardInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "80%",
  borderRadius: "5%",
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

const LinkedCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

export const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <LinkedCard>
          <Card
            variant="plain"
            sx={{
              background: "var(--bright)",
              minWidth: "260px",
              padding: "0",
            }}>
            <Image src={require(`../Assets/class.png`)} />
            <CardInfo>
              <Sheet sx={{ background: "var(--bright)", padding: "0 " }}>
                <Brandname>Grande</Brandname>
                <ItemName>{item.title}</ItemName>
                <Price>${item.price}</Price>
              </Sheet>
              <Sheet sx={{ background: "var(--bright)" }}>
                <FavoriteBorderOutlinedIcon fontSize="large" />
              </Sheet>
            </CardInfo>
          </Card>
        </LinkedCard>
      ))}
    </>
  );
};
// require(`${item.imageUrl}`)}
