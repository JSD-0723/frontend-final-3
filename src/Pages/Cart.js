import { Sheet } from "@mui/joy";
import { styled } from "@mui/joy/styles";
import { ProductList } from "../Components/ProductList";
import { NavigateButton } from "../Components/NavigateButton";

const PageTitle = styled("h2")(({ theme }) => ({
  color: "var(--primary)",
  fontWeight: "var(--semi-bold-font)",
  padding: "18px 15px",
}));

const RecentPage = styled("p")(({ theme }) => ({
  fontSize: ".83rem",
  color: "var(--type-low-emphasis)",
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
      <PageTitle>My Cart</PageTitle>
      <Sheet sx={{ background: "var(--bright)" }}>
        <ProductList />
      </Sheet>
    </>
  );
};
