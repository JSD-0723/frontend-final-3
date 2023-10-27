import { FooterContent } from "../Components/FooterContent";
import { TabsBottomNavExample } from "../Components/MobileBottomNavigation";
import { AccordionFooter } from "../Components/AccordionFooter";
import { Sheet } from "@mui/joy";

export const Footer = () => {
  return (
    <>
      <Sheet
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}>
        <FooterContent />
      </Sheet>
      <Sheet
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
          marginBottom: "60px",
        }}>
        <AccordionFooter />
      </Sheet>
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
          zIndex: "1",
          width: "100vw",
        }}>
        <TabsBottomNavExample />
      </Sheet>
    </>
  );
};
