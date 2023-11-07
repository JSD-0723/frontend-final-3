import * as React from "react";
import Box from "@mui/joy/Box";
import { Button } from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
export const ProductInfo = ({ details, onClick, count, setCount }) => {
  const productInfo = details.product;
  return (
    <>
      <p>{productInfo?.brand}</p>
      <p>{productInfo?.title}</p>
      <p>{productInfo?.totalRating}</p>
      <p>{productInfo?.price}</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 4,
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            pt: 4,
            mb: 2,
            borderTop: "1px solid",
            borderColor: "background.level1",
          }}>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={() => setCount((c) => (c > 1 ? c - 1 : c))}>
            <Remove />
          </IconButton>
          <Typography fontWeight="md" textColor="text.secondary">
            {count}
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            onClick={() => setCount((c) => c + 1)}>
            <Add />
          </IconButton>
          <Button onClick={onClick}>Palce Order</Button>
        </Box>
      </Box>
    </>
  );
};
