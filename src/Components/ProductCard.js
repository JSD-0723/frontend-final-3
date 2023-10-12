import { Sheet } from "@mui/joy";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { styled } from "@mui/joy/styles";

const CardInfo = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "420px",
}));

export const ProductCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Sheet>
          <img src="../Assets/1.png" />
          <CardInfo>
            <Sheet>
              <h4>Grande</h4>
              <h5>{item.title}</h5>
              <p>${item.price}</p>
            </Sheet>
            <Sheet>
              <FavoriteBorderOutlinedIcon fontSize="large" />
            </Sheet>
          </CardInfo>
        </Sheet>
      ))}
    </>
  );
};
