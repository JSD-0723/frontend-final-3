import { Grid, Sheet } from "@mui/joy";
import BrandCard from "./BrandCard";
import Typography from "@mui/joy/Typography";

export const Brands = ({ brands }) => {
  return (
    <>
      <Sheet
        sx={{
          pl: 3,
          background: "var(--bright)",
        }}

        id="brands"
      >
        <Typography level="h2" fontSize="title-lg" sx={{fontWeight: 500,}}>
        Shop by Brands
        </Typography>
      </Sheet>
      <Grid
        container
        columns={{ lg: 2, sm: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          p: 3,
          pb:6,
          justifyContent: 'space-evenly',
        }}
      >
        {brands.map((brand) => {
          return (
            <Grid>
              <BrandCard brand={brand} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
