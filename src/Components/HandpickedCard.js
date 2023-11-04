import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/joy/styles";

const LinkedCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

const HandpickedCard = ({ product }) => {
  return (
    <LinkedCard to={`/detail/${product.id}`}>
      <Card sx={{ height: 280, width: 280, borderRadius: 25, border: 0 }}>
        <CardCover>
          <img src={product.imageUrl} alt={product.title} />
        </CardCover>
        <CardCover
          sx={{
            objectFit: "cover",
            background:
              "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 150px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg" textColor="#171520" fontSize="1.7rem">
            {product.title}
          </Typography>
        </CardContent>
      </Card>
    </LinkedCard>
  );
};

export default HandpickedCard;
