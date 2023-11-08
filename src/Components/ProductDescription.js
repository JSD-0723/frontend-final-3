import { ProductCard } from "./ProductCard";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import User from '../Assets/user.png'
import Box from "@mui/joy/Box";

export const ProductDescription = ({ details }) => {
  const productInfo = details.product;
  const productReview = details.ratingReviews;
  const relatedProducts = details.relatedProducts;

  return (
    <>
      <Tabs aria-label="Basic tabs" defaultValue={0} sx={{ px: 3, textDecoration: 'none' }}>
        <TabList sx={{
          backgroundColor: '#F1F1F1', borderRadius: 9, border: 'none', boxShadow: 'none', color: '#626262',
          "& .Mui-selected": { backgroundColor: '#1B4B66 !important', borderRadius: 10, m: 1, color: 'white', },
          "& .Mui-selected::after": { display: 'none', backgroundColor: '#1B4B66' },
        }}>
          <Tab>Product Description</Tab>
          <Tab>Related Products</Tab>
          <Tab>Ratings and Reviews</Tab>
        </TabList>

        <TabPanel value={0} sx={{ mb: 10, ml: -2, mt: 2 }}>
          <Typography level="body-lg" >
            {productInfo?.description}
          </Typography>
        </TabPanel>

        <TabPanel value={1}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              py: 1,
              mb: 3,
              overflow: "auto",
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
              "::-webkit-scrollbar": { display: "none" },
            }}>
            <ProductCard products={relatedProducts} />
          </Box>
        </TabPanel>

        <TabPanel value={2}>
          {productReview?.map((review) => (
            <List sx={{ width: '100%', maxWidth: 460, }}>
              <ListItem key={review.id} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={User} />
                </ListItemAvatar>
                <ListItemText
                  primary={<> <Typography sx={{ fontWeight: 600 }}>{review.title}</Typography> <Typography>
                    Rating: {review.rating}/5.0
                  </Typography> </>}

                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {review.description}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />

            </List>
          ))}
        </TabPanel>
      </Tabs >
    </>
  );
};
