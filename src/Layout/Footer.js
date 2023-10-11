import AccordionBasic from "../Components/AccordionFooter";
import { Sheet } from "@mui/joy";
import { FooterContent } from "../Components/FooterContent";

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
        }}>
        <AccordionBasic />
      </Sheet>
    </>
  );
};
