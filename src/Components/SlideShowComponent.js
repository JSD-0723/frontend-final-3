import * as React from "react";
import Box from "@mui/joy/Box";
import { Sheet } from "@mui/joy";
import { ProductCard } from "./ProductCard";
import { styled } from "@mui/joy/styles";
import { NavigateButton } from "./NavigateButton";

const ComponantNavigater = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  background: "var(--bright)",
  padding: "0 20px",
}));

export const SlideShowComponent = ({ fetchedData }) => {
  const data = fetchedData.data;

  return (
    <>
      <ComponantNavigater>
        <h2>New Arrivals</h2>
        <NavigateButton text={"View All"} />
      </ComponantNavigater>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          py: 1,
          px: 2,
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
    </>
  );
};
