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
            md: "inline",
            lg: "inline",
            xl: "inline",
          },
        }}>
        <FooterContent />
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
        }}>
        <AccordionBasic />
      </Sheet>
    </>
  );
};
