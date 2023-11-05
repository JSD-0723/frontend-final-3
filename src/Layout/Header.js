import { Sheet } from "@mui/joy";
import { SearchInput } from "../Components/SearchInput";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import { DrawerMobileNavigation } from "../Components/MobileNavigation";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 22px",
  background: "var(--bright)",
}));

const SideContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  background: "var(--bright)",
}));

const StoreName = styled("h1")(({ theme }) => ({
  color: "#17494D",
}));

const AppTitle = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

const NavbarLinksContainer = styled(Sheet)(({ theme }) => ({
  gap: "12px",
  alignItems: "center",
  marginLeft: "10px",
  background: "var(--bright)",
}));

const NavbarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "var(--type-high-emphasis)",
  fontWeight: "var(--medium-font)",
}));

const IconContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  background: "var(--bright)",
}));

export const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  let navigate = useNavigate();

  const handleNavigation = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    navigate(`/category?keyword=${newValue}`);
  };

  return (
    <>
      <NavbarContainer>
        <SideContainer>
          <DrawerMobileNavigation />
          <AppTitle to={"/"}>
            <StoreName>CORA'L</StoreName>
          </AppTitle>
          <NavbarLinksContainer
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
              },
            }}>
<<<<<<< Updated upstream
            <NavbarLink>Handbags</NavbarLink>
            <NavbarLink>Watches</NavbarLink>
            <NavbarLink>Skincare</NavbarLink>
            <NavbarLink>Jewellery</NavbarLink>
            <NavbarLink>Apparels</NavbarLink>
=======
            <NavbarLink to={"/category?categoryName=Handbags"}>
              Handbags
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Watches"}>
              Watches
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Skincare"}>
              Skincare
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Jewellery"}>
              Jewellery
            </NavbarLink>
            <NavbarLink to={"/category?categoryName=Apparels"}>
              Apparels
            </NavbarLink>
>>>>>>> Stashed changes
          </NavbarLinksContainer>
        </SideContainer>
        <SideContainer>
          <SearchInput onChange={handleNavigation} value={searchValue} />
          <IconContainer>
            <FavoriteBorderOutlinedIcon
              fontSize="medium"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <PersonOutlineOutlinedIcon
              fontSize="medium"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <LocalMallOutlinedIcon
              fontSize="medium"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "none",
                  lg: "inline",
                  xl: "inline",
                },
              }}
            />
            <NotificationsOutlinedIcon
              sx={{
                display: {
                  xs: "inline",
                  sm: "inline",
                  md: "inline",
                  lg: "none",
                  xl: "none",
                },
              }}
            />
          </IconContainer>
        </SideContainer>
      </NavbarContainer>
    </>
  );
};