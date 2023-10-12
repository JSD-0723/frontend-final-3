import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { FooterContent } from "./FooterContent";

export default function AccordionBasic() {
  return (
    <AccordionGroup sx={{ width: "100vw", background: "var(--bright)" }}>
      <Accordion sx={{ padding: "0px" }}>
        <AccordionSummary sx={{ padding: "0px 25px" }}>
          More about CORA'L
        </AccordionSummary>
        <AccordionDetails>
          <FooterContent />
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
