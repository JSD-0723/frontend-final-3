import { Grid, Sheet } from "@mui/joy";

export const Brands = () => {
  return (
    <>
      <Sheet sx={{ padding: "0 20px", background: "var(--bright)" }}>
        <h2>Shop by Brands</h2>
      </Sheet>

      <Grid
        container
        columns={{ lg: 2, sm: 3 }}
        spacing={{ xs: 2, md: 3 }}
        sx={{ padding: "20px" }}>
        <Grid>
          <img src={require(`../Assets/zara.png`)} />
        </Grid>
        <Grid>
          <img src={require(`../Assets/D&G.png`)} />
        </Grid>
        <Grid>
          <img src={require(`../Assets/H&M.png`)} />
        </Grid>
        <Grid>
          <img src={require(`../Assets/chanel.png`)} />
        </Grid>
        <Grid>
          <img src={require(`../Assets/prada.png`)} />
        </Grid>
        <Grid>
          <img src={require(`../Assets/biba.png`)} />
        </Grid>
      </Grid>
    </>
  );
};
