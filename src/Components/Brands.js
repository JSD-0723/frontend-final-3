import { Grid, Sheet } from "@mui/joy";
import { Link } from "react-router-dom";
import { styled } from "@mui/joy/styles";

const Image = styled("img")(({ theme }) => ({
  minWidth: "135px",
  padding: "0",
}));

export const Brands = () => {
  return (
    <>
      <Sheet
        sx={{
          padding: "0 20px",
          background: "var(--bright)",
        }}>
        <h2>Shop by Brands</h2>
      </Sheet>

      <Grid
        container
        columns={{ lg: 2, sm: 3 }}
        spacing={{ xs: 1, md: 3 }}
        sx={{
          padding: "20px",
        }}>
        <Grid>
          <Link to={"/category?brandName=zara"}>
            <Image src={"/Assets/zara.png"} />
          </Link>
        </Grid>
        <Grid>
          <Link to={"/category?brandName=D&G"}>
            <Image src={"/Assets/D&G.png"} />
          </Link>
        </Grid>
        <Grid>
          <Image src={"/Assets/H&M.png"} />
        </Grid>
        <Grid>
          <Image src={"/Assets/chanel.png"} />
        </Grid>
        <Grid>
          <Image src={"/Assets/prada.png"} />
        </Grid>
        <Grid>
          <Image src={"/Assets/biba.png"} />
        </Grid>
      </Grid>
    </>
  );
};
