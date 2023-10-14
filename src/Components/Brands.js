import { Grid, Sheet } from "@mui/joy";
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
          <Image src={require(`../Assets/zara.png`)} />
        </Grid>
        <Grid>
          <Image src={require(`../Assets/D&G.png`)} />
        </Grid>
        <Grid>
          <Image src={require(`../Assets/H&M.png`)} />
        </Grid>
        <Grid>
          <Image src={require(`../Assets/chanel.png`)} />
        </Grid>
        <Grid>
          <Image src={require(`../Assets/prada.png`)} />
        </Grid>
        <Grid>
          <Image src={require(`../Assets/biba.png`)} />
        </Grid>
      </Grid>
    </>
  );
};
