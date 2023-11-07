import { Sheet } from "@mui/joy";
import { ProductCard } from "./ProductCard";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import Rating from '@mui/material/Rating';

export const ProductDescription = ({ details }) => {
  const productInfo = details.product;
  const productReview = details.ratingReviews;
  const relatedProducts = details.relatedProducts;

  return (
    <>
      <Tabs aria-label="Basic tabs" defaultValue={0}>
        <TabList>
          <Tab>Product Description</Tab>
          <Tab>Related Products</Tab>
          <Tab>Ratings and Reviews</Tab>
        </TabList>

        <TabPanel value={0}>
          <p>{productInfo?.description}</p>
        </TabPanel>
        <TabPanel value={1}>
          <Sheet sx={{ width: "200px" }}>
            <ProductCard products={relatedProducts} />
          </Sheet>
        </TabPanel>
        <TabPanel value={2}>
          {productReview?.map((review) => (
            <div key={review.id}>
              <p>{review.title}</p>
              <p>{review.description}</p>
              <Rating icon={<StarRateRoundedIcon fontSize="inherit" />} emptyIcon={<StarRateRoundedIcon style={{ opacity: 0.55 }} fontSize="inherit" />} name="read-only" value={review.rating} readOnly sx={{
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
            </div>
          ))}
        </TabPanel>
      </Tabs>


    </>
  );
};