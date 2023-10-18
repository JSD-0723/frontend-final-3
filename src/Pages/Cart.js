import { Sheet } from "@mui/joy";
import { ProductList } from "../Components/ProductList";
import { NavigateButton } from "../Components/NavigateButton";
export const Cart = () => {
  return (
    <>
      <Sheet sx={{ display: "flex", alignItems: "center" }}>
        <NavigateButton text={"Home"} />
        <p>My Cart</p>
      </Sheet>
      <h2>My Cart</h2>
      <Sheet sx={{ background: "var(--bright)" }}>
        <ProductList />
      </Sheet>
    </>
  );
};
