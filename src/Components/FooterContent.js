import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Sheet } from "@mui/joy";
import Fblogo from "../Assets/fb logo.svg";
import Instalogo from "../Assets/insta logo.svg";
import Twitterlogo from "../Assets/twitter.svg";
import Youtubelogo from "../Assets/youtube.svg";
import Locationlogo from "../Assets/location.svg";
import Divider from "@mui/joy/Divider";

const FooterContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "30px 50px",
  paddingBottom: "85px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));

const LeftSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  width: "40%",
  gap: "50px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "10px",
  gap: "20px",
}));

const List = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
}));

const FilterLinks = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var( --light-text)",
}));

const IconsContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
  },
}));

const Location = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "5px",
  paddingBottom: "7px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
  },
}));

const RightsInfo = styled("p")(({ theme }) => ({
  color: "var(--light-text)",
}));

export const FooterContent = () => {
  return (
    <>
      <FooterContainer variant="solid" color="primary">
        <LeftSide variant="solid" color="primary">
          <List variant="solid" color="primary">
            <p>Shop by Category</p>
            <FilterLinks>Skincare</FilterLinks>
            <FilterLinks>Personal Care</FilterLinks>
            <FilterLinks>Handbags</FilterLinks>
            <FilterLinks>Apparels</FilterLinks>
            <FilterLinks>Watches</FilterLinks>
            <FilterLinks>Eye Wear</FilterLinks>
            <FilterLinks>Jewellery</FilterLinks>
          </List>
          <List variant="solid" color="primary">
            <p>Shop by Products</p>
            <FilterLinks>Featured</FilterLinks>
            <FilterLinks>Trendy</FilterLinks>
            <FilterLinks>Brands</FilterLinks>
          </List>
        </LeftSide>
        <Divider
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
            width: "100vw",
          }}
        />
        <RightSide variant="solid" color="primary">
          <IconsContainer variant="solid" color="primary">
            <img src={Fblogo} />
            <img src={Instalogo} />
            <img src={Twitterlogo} />
            <img src={Youtubelogo} />
          </IconsContainer>
          <Sheet>
            <Location variant="solid" color="primary">
              <img src={Locationlogo} />
              <p>United States</p>
            </Location>
            <Sheet variant="solid" color="primary">
              <RightsInfo>
                © 2021 | Cora Levience All Rights Reserved
              </RightsInfo>
            </Sheet>
          </Sheet>
        </RightSide>
      </FooterContainer>
    </>
  );
};
