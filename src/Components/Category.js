import React from "react";
import base from "../Assets/base.svg";
import { Box } from "@mui/system";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { KeyboardArrowRight } from "@mui/icons-material";
import Pagination from "./Pagination";
import { Stack } from "@mui/material";
import { CategoryCard } from "./CategoryCard";
import Grid from "@mui/joy/Grid";

function Category({ categoryProduct }) {
  return (
    <Stack sx={{ direction: "column", m: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <img src={base} alt="Black Friday Sales" />
      </Box>
      <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs">
        {["Home", ["Brand"]].map((item) => (
          <Link key={item} color="#1B4B66" sx={{ textDecoration: "none" }}>
            {item}
          </Link>
        ))}
        <Typography sx={{ color: "#626262" }}>Category</Typography>
      </Breadcrumbs>
      <Typography level="h2" sx={{ color: "#1B4B66" }}>
        Category Name
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
        sx={{
          gap: 3,
          width: 1 / 1,
          justifyContent: "flex",
          py: 6,
          px: 3,
        }}>
        <CategoryCard categoryProduct={categoryProduct} />
      </Grid>
      <Pagination />
    </Stack>
  );
}
export default Category;
