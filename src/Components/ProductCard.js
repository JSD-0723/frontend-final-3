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
  height: "16rem",
  aspectRatio: 1 / 1,
}));

const Brandname = styled("h4")(({ theme }) => ({
  fontSize: ".9rem",
  lineHeight: 2,
  fontWeight: 600,
}));

const ItemName = styled("h5")(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "var(--extra-light-font)",
}));

const LinkedCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

export const ProductCard = ({ products }) => {
  return (
    <>
      {products?.map((item) => (
        <LinkedCard key={item.id} to={`/detail/${item.id}`}>
          <Card
            variant="plain"
            sx={{
              background: "var(--bright)",
              minWidth: "260px",
              padding: "0",
            }}>
            <Image src={item.imageUrl} />
            <CardInfo>
              <Sheet sx={{ background: "var(--bright)", padding: "0 " }}>
                <Brandname>{item.brand}</Brandname>
                <ItemName>{item.title}</ItemName>
                <Brandname>${item.price}</Brandname>
              </Sheet>
              <Sheet sx={{ background: "var(--bright)" }}>
                <FavoriteBorderOutlinedIcon fontSize="medium" />
              </Sheet>
            </CardInfo>
          </Card>
        </LinkedCard>
      ))}
    </>
  );
};