import { Grid, Sheet } from "@mui/joy";
import BrandCard from "./BrandCard";

export const Brands = ({ brands }) => {
  return (
    <>
      <Sheet
        sx={{
          padding: "0 20px",
          background: "var(--bright)",
        }}
      >
        <h2>Shop by Brands</h2>
      </Sheet>

      <Grid
        container
        columns={{ lg: 2, sm: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          padding: "20px",
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
