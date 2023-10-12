import { Sheet } from "@mui/joy";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/joy/styles";

const CardInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const ProductCard = () => {
  return (
    <>
      <Sheet>
        <img src="../Assets/1.png" />
        <CardInfo>
          <Sheet>
            <h4>Grande</h4>
            <h5>Blossom Pouch</h5>
            <p>$39.49</p>
          </Sheet>
          <Sheet>
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </Sheet>
        </CardInfo>
      </Sheet>
    </>
  );
};
