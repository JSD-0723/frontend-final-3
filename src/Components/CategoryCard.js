import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/system';
import { Link } from "react-router-dom";
import { styled } from "@mui/joy/styles";
import noFishFound from "../Assets/404.gif";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
const Image = styled("img")(({ theme }) => ({
  borderRadius: "3%",
  aspectRatio: 1 / 1,
}));
const LinkedCard = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));
export default function CategoryCard({ categoryProduct }) {
  if (!categoryProduct || categoryProduct.length === 0) {
    return <Box component="img" src={noFishFound} alt="No Products Found!" sx={{ width: 2 / 3, mx: 'auto' }} />;
  }
  return (
    <>
      {categoryProduct.map((item) => (
        <LinkedCard key={item.id} to={`/detail/${item.id}`}>
          <Card
            variant="plain"
            sx={{
              background: "var(--bright)",
              padding: "0",
              width: {
                xs: 200,
                sm: 235,
                md: 270,
                lg: 305,
                xl: 340,
              }
            }}>
            <Image src={item.imageUrl} />
            <div>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', right: '0.7rem', }}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <Typography level="title-md" sx={{ color: '#171520', mb: 1, fontWeight: 400, maxWidth: '75%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.title}</Typography>
              <Typography level="body-sm" sx={{ color: '#626262', fontWeight: 400, maxWidth: '75%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{item.brand}</Typography>
            </div>
            <CardContent orientation="horizontal" sx={{ mx: -0.9, my: -0.5, alignItems: 'center', }}>
              <Rating icon={<StarRateRoundedIcon fontSize="inherit" />} emptyIcon={<StarRateRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" />} name="read-only" value={3} readOnly sx={{
                color: '#FF8C4B',
                "& .MuiRating-icon": {
                  width: {
                    xs: '1.3rem',
                  sm: '1.4rem',
                  md: '1.5rem',
                  lg: '1.6rem',
                  xl: '1.7rem',
                  }
                },
                fontSize: {
                  xs: 28,
                  sm: 30,
                  md: 32,
                  lg: 34,
                  xl: 36,
                }
              }} />
              <Typography sx={{
                ml: 2, color: '#1B4B66',
                fontSize: {
                  xs: '0.8rem',
                  sm: '0.9rem',
                  md: '0.9rem',
                  lg: '1rem',
                  xl: '1rem',
                }
              }}>43 Ratings</Typography>
            </CardContent>
            <Typography fontSize="md" sx={{ color: '#171520', fontWeight: 400, maxWidth: '75%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              ${item.price}
            </Typography>
          </Card>
        </LinkedCard>
      ))}
    </>
  );
}