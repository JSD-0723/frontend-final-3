import React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Makeup from "../Assets/Makeup.svg";
import Facepack from "../Assets/Facepack.svg";
import Skincare from "../Assets/Skincare.svg";
import pinkArrow from "../Assets/pinkArrow.svg";
import blueArrow from "../Assets/blueArrow.svg";
import { CardActions } from "@mui/joy";
import { Link } from "react-router-dom";
import { styled } from "@mui/joy/styles";

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  boxSizing: 'border-box',
  m: 0,
  p: 0,
}));
function ThreeCards() {
  return (
    <Box sx={{ mx: 3 }}>
      <StyledLink to={"/category?limited=true"}>
        <Card
          sx={{
            border: 0,
            mb: 4,
            height: {
              xs: 200,
              sm: 250,
              md: 300,
              lg: 350,
              xl: 400,
            },
          }}>
          <CardCover sx={{ objectFit: "fill" }}>
            <img src={Makeup} alt="Makeup"/>
          </CardCover>
          <CardContent
            sx={{
              ml: 3,
              mt: {
                xs: 4,
                sm: 6,
                md: 8,
                lg: 10,
                xl: 12,
              },
            }}>
            <Typography
              level="title-lg"
              textColor="#97451F"
              sx={{
                fontWeight: "300",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.4rem",
                  lg: "1.6rem",
                  xl: "1.8rem",
                },
              }}>
              LIFESTYLE
            </Typography>
            <Typography
              level="title-lg"
              textColor="#97451F"
              sx={{
                fontWeight: "750",
                width: {
                  xs: 6 / 9,
                  sm: 5 / 9,
                  md: 5 / 9,
                  lg: 4 / 9,
                  xl: 4 / 9,
                },
                fontSize: {
                  xs: "1.6rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "2.9rem",
                  xl: "3.5rem",
                },
              }}>
              Makeup Accessories from Top Brands
            </Typography>
          </CardContent>
        </Card>
      </StyledLink>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 6,
          height: {
            xs: 100,
            sm: 150,
            md: 170,
            lg: 200,
            xl: 230,
          },
        }}>
        <Card sx={{ border: 0, flex: 1 }}>
          <StyledLink to={"/category?discount=15"}>
            <CardCover sx={{ objectFit: "cover" }}>
              <img src={Skincare} alt="Skincare"/>
            </CardCover>
            <CardContent sx={{ width: "50%", transform: "translate(90%)" }}>
              <Typography
                level="title-lg"
                textColor="#A53F64"
                sx={{
                  fontWeight: "750",
                  textAlign: "right",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.6rem",
                    md: "2.2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                  },
                }}>
                Skincare Essentials
              </Typography>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <img src={pinkArrow} alt="arrow icon"/>
              </CardActions>
            </CardContent>

          </StyledLink>
        </Card>

        <Card sx={{ border: 0, flex: 1 }}>
          <StyledLink to={"/category?rating=4.5&ratingType=above"}>
            <CardCover sx={{ objectFit: "cover" }}>
              <img src={Facepack} alt="Facepack"/>
            </CardCover>
            <CardContent
              sx={{
                width: {
                  xs: "50%",
                  sm: "45%",
                  md: "45%",
                  lg: "40%",
                  xl: "40%",
                },
                transform: {
                  xs: "translate(90%)",
                  sm: "translate(95%)",
                  md: "translate(110%)",
                  lg: "translate(140%)",
                  xl: "translate(140%)",
                },
              }}>
              <Typography
                level="title-lg"
                textColor="#1B4B66"
                sx={{
                  fontWeight: "750",
                  textAlign: "right",
                  justifyContent: "flex-end",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.6rem",
                    md: "2.2rem",
                    lg: "2.5rem",
                    xl: "3rem",
                  },
                }}>
                Facepacks & Peels
              </Typography>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <img src={blueArrow} alt="arrow icon"/>
              </CardActions>
            </CardContent>

          </StyledLink>
        </Card>
      </Box>
    </Box>
  );
}
export default ThreeCards;

