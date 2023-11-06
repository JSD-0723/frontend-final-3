import React from "react";
import base from "../Assets/base.svg";
import { Box } from "@mui/system";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { KeyboardArrowRight } from "@mui/icons-material";
import Pagination from "./Pagination";
import { Stack } from "@mui/material";
import CategoryCard from "./CategoryCard";
import Grid from "@mui/joy/Grid";

function Category({
  categoryTitle,
  categoryProduct,
  onNext,
  totalPages,
  currentPage,
  pageChangeHandler,
}) {
  return (
    <Stack sx={{ m: 3 }}>

      <Box sx={{
        flexGrow: 1, position: 'relative',
        height: {
          xs: 200,
          sm: 270,
          md: 370,
          lg: 430,
          xl: 450,
        },
      }}>
        <Box className='container'>
          <img src={base} alt={base} />
        </Box>
      </Box>

      <Breadcrumbs separator={<KeyboardArrowRight />} aria-label="breadcrumbs" sx={{ml: -1.2}}>
        {["Home"].map((item) => (
          <Link to="/" key={item} color="#1B4B66" sx={{ textDecoration: "none" }}>
            {item}
          </Link>
        ))}
        <Typography sx={{ color: "#626262" }}> {categoryTitle} </Typography>
      </Breadcrumbs>

      <Typography level="h2" sx={{ color: "#1B4B66", my: 2.8, fontWeight: 500 }}>
        {categoryTitle}
      </Typography>

      <Grid
        container
        sx={{
          gap: 5,
          width: 1 / 1,
          py: 5,
        }}
      >
        <CategoryCard categoryProduct={categoryProduct} />
      </Grid>

      <Pagination
        onNext={onNext}
        totalPages={totalPages > 0 ? totalPages : Pagination.hideNextButton}
        currentPage={currentPage}
        pageChangeHandler={pageChangeHandler}
      />
    </Stack>
  );
}
export default Category;

