import { Sheet } from "@mui/joy";
import { SearchInput } from "../Components/SearchInput";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";

const NavbarContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "27px 22px",
  background: "primary"
}));

const SideContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "15px",
}));

const StoreName = styled("h1")(({ theme }) => ({}));

const NavbarLinksContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
}));

const NavbarLink = styled(Link)(({ theme }) => ({}));

const IconContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "15px",
}));

export const Header = () => {
  return (
    <>
      <NavbarContainer>
        <SideContainer>
          <StoreName>CORA'L</StoreName>
          <NavbarLinksContainer>
            <NavbarLink>Handbags</NavbarLink>
            <NavbarLink>Watches</NavbarLink>
            <NavbarLink>Skincare</NavbarLink>
            <NavbarLink>Jewellery</NavbarLink>
            <NavbarLink>Apparels</NavbarLink>
          </NavbarLinksContainer>
        </SideContainer>
        <SideContainer>
          <SearchInput />
          <IconContainer>
            <FavoriteBorderOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <LocalMallOutlinedIcon />
          </IconContainer>
        </SideContainer>
      </NavbarContainer>
    </>
  );
};
