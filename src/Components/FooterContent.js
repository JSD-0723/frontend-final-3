import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import { Sheet } from "@mui/joy";
import Fblogo from "../Assets/fb logo.svg";
import Instalogo from "../Assets/insta logo.svg";
import Twitterlogo from "../Assets/twitter.svg";
import Youtubelogo from "../Assets/youtube.svg";
import Locationlogo from "../Assets/location.svg";

const FooterContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "30px 50px",
  paddingBottom: "85px",
  border: "2px solid black",
}));

const LeftSide = styled(Sheet)(({ theme }) => ({
  display: "flex",
  width: "40%",
  gap: "50px",
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

const IconsContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "20px",
}));

const Location = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: "5px",
  paddingBottom: "7px",
}));

export const FooterContent = () => {
  return (
    <>
      <FooterContainer>
        <LeftSide>
          <List>
            <p>Shop by Category</p>
            <Link>Skincare</Link>
            <Link>Personal Care</Link>
            <Link>Handbags</Link>
            <Link>Apparels</Link>
            <Link>Watches</Link>
            <Link>Eye Wear</Link>
            <Link>Jewellery</Link>
          </List>
          <List>
            <p>Shop by Products</p>
            <Link>Featured</Link>
            <Link>Trendy</Link>
            <Link>Brands</Link>
          </List>
        </LeftSide>
        <RightSide>
          <IconsContainer>
            <img src={Fblogo} />
            <img src={Instalogo} />
            <img src={Twitterlogo} />
            <img src={Youtubelogo} />
          </IconsContainer>
          <Sheet>
            <Location>
              <img src={Locationlogo} />
              <p>United States</p>
            </Location>
            <Sheet>
              <p>© 2021 | Cora Levience All Rights Reserved</p>
            </Sheet>
          </Sheet>
        </RightSide>
      </FooterContainer>
    </>
  );
};
