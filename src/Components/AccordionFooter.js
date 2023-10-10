import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { Header } from "../Layout/Header";

export default function AccordionBasic() {
  return (
    <AccordionGroup sx={{ width: "100vw" }}>
      <Accordion>
        <AccordionSummary sx={{ p: "3" }}>More about CORA'L</AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
