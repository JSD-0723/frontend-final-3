import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { PageTitle } from "../Components/PageTitle";
import { ProductList } from "../Components/ProductList";
import { NavigateButton } from "../Components/NavigateButton";
import { OrderSummary } from "../Components/OrderSummary";
import { CartItemCard } from "../Components/CartItemCard";
import { SectionTitle } from "../Components/SectionTitle";

const RecentPage = styled("p")(({ theme }) => ({
  fontSize: ".83rem",
  color: "var(--type-low-emphasis)",
}));

const Container = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 7px 30px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
  },
}));

const MediumScreenContainer = styled(Sheet)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const LeftSideContainer = styled(Sheet)(({ theme }) => ({
  width: "60vw",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightSideContainer = styled(Sheet)(({ theme }) => ({
  background: "var(--bright)",
  width: "30vw",
  paddingRight: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Cart = () => {
  return (
    <>
      <Sheet
        sx={{
          display: "flex",
          alignItems: "center",
          background: "var(--bright)",
        }}>
        <NavigateButton text={"Home"} />
        <RecentPage>My Cart</RecentPage>
      </Sheet>
      <PageTitle text={"My Cart"} />
      <Container>
        <MediumScreenContainer>
          <Sheet
            sx={{
              display: {
                lg: "none",
                md: "none",
                sm: "none",
                xs: "block",
              },
              background: "var(--accent)",
            }}>
            <CartItemCard />
          </Sheet>
          <LeftSideContainer
            sx={{
              display: {
                lg: "block",
                md: "block",
                sm: "block",
                xs: "none",
              },
            }}>
            <ProductList />
          </LeftSideContainer>
        </MediumScreenContainer>
        <MediumScreenContainer>
          <RightSideContainer>
            <SectionTitle text={"Order Summary"} />
            <OrderSummary />
          </RightSideContainer>
        </MediumScreenContainer>
      </Container>
    </>
  );
};
