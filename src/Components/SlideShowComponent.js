import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import { ProductCard } from "./ProductCard";
import Grid from "@mui/joy/Grid";

export const SlideShowComponent = () => {
  return (
    <Box
      sx={{
        gap: 1,
        p: 1,
        overflow: "auto",
        width: "100vw",
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
      }}>
      <Grid container spacing={{ xs: 2, md: 3 }} sx={{ flexGrow: 1 }}>
        <Grid lg={3} sm={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </Box>
  );
};
