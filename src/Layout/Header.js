import { Sheet } from "@mui/joy";
import { SearchInput } from "../Components/SearchInput";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { styled } from "@mui/joy/styles";
import { Link } from "react-router-dom";
import { DrawerMobileNavigation } from "../Components/MobileNavigation";
import { TabsBottomNavExample } from "../Components/MobileBottomNavigation";

const NavbarContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 22px",
}));

const SideContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "20px",
}));

const StoreName = styled("h1")(({ theme }) => ({}));

const NavbarLinksContainer = styled(Sheet)(({ theme }) => ({
  gap: "12px",
  alignItems: "center",
  marginLeft: "10px",
}));

const NavbarLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
}));

const IconContainer = styled(Sheet)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
}));

export const Header = () => {
  return (
    <>
      <NavbarContainer>
        <SideContainer>
          <DrawerMobileNavigation />
          <StoreName>CORA'L</StoreName>
          <NavbarLinksContainer
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
              },
            }}>
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
      <Sheet
        sx={{
          display: {
            xs: "inline",
            sm: "inline",
            md: "none",
            lg: "none",
            xl: "none",
          },
          position: "fixed",
          bottom: "0",
          left: "0",
          zIndex: "1",
          width: "100vw",
        }}>
        <TabsBottomNavExample />
      </Sheet>
    </>
  );
};
