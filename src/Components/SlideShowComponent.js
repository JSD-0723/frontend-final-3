import * as React from "react";
import Box from "@mui/joy/Box";
import { ProductCard } from "./ProductCard";
import Grid from "@mui/joy/Grid";

export const SlideShowComponent = ({ fetchedData }) => {
  const data = fetchedData.data;

  return (
    <Box
      sx={{
        display: "flex",
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
      <ProductCard data={data} />
    </Box>
  );
};
