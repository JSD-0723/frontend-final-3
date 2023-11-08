import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Sheet } from "@mui/joy";
import Fblogo from "../icons/fb logo.svg";
import Instalogo from "../icons/insta logo.svg";
import Twitterlogo from "../icons/twitter.svg";
import Youtubelogo from "../icons/youtube.svg";
import Locationlogo from "../icons/location.svg";
import Divider from "@mui/joy/Divider";
import { loadCategories } from "../Shared/API/FetchData";
import { useEffect, useState } from "react";

const FooterContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  bottom:-10,
  justifyContent: "space-between",
  padding: "30px 50px",
  paddingBottom: "85px",
  background: "var(--primary)",
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
  background: "var(--primary)",
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
  background: "var(--primary)",
}));

const List = styled(Sheet)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "3px",
  background: "var(--primary)",
}));

const FilterLinks = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var( --light-text)",
  background: "var(--primary)",
}));

const IconsContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "20px",
  background: "var(--primary)",
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
  background: "var(--primary)",
  color: "var(--accent)",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "start",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "start",
  },
}));

const RightsInfo = styled("p")(({ theme }) => ({
  color: "var(--light-text)",
  background: "var(--primary)",
}));

const StyledParagraph = styled("p")(({ theme }) => ({
  color: "var(--accent)",
}));

export const FooterContent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data", error);
      });
  }, []);

  return (
    <>
      <FooterContainer>
        <LeftSide>
          <List>
            <StyledParagraph>Shop by Category</StyledParagraph>
            {categories.map((item) => (
              <FilterLinks
                to={`/category?categoryName=${item.name}`}
                key={item.id}
              >
                {item.name}
              </FilterLinks>
            ))}
          </List>
          <List>
            <StyledParagraph>Shop by Products</StyledParagraph>
            <FilterLinks>Featured</FilterLinks>
            <FilterLinks>Trendy</FilterLinks>
            <FilterLinks to="/">Brands</FilterLinks>
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
        <RightSide>
          <IconsContainer>
            <Link to={"https://www.facebook.com/"}>
              <img src={Fblogo} />
            </Link>
            <Link to={"https://www.instagram.com/"}>
              <img src={Instalogo} />
            </Link>
            <Link to={"https://www.twitter.com/"}>
              <img src={Twitterlogo} />
            </Link>
            <Link to={"https://www.youtube.com/"}>
              <img src={Youtubelogo} />
            </Link>
          </IconsContainer>
          <Sheet>
            <Location>
              <img src={Locationlogo} />
              <StyledParagraph>United States</StyledParagraph>
            </Location>
            <Sheet>
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