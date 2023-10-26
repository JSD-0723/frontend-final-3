import * as React from "react";
import AccordionGroup from "@mui/joy/AccordionGroup";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionSummary from "@mui/joy/AccordionSummary";
import { SectionTitle } from "./SectionTitle";
import { Divider } from "@mui/material";
import { Sheet } from "@mui/joy";
import { InputWithLabel } from "./InputWithLabel";
import { styled } from "@mui/joy/styles";

const FormRaw = styled(Sheet)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
}));

const RightSide = styled(Sheet)(({ theme }) => ({
  width: "55%",
}));

const LefttSide = styled(Sheet)(({ theme }) => ({
  width: "40%",
}));

export const AddressForm = () => {
  return (
    <>
      <AccordionGroup sx={{ background: "var(--bright)" }}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary>
            <SectionTitle text={"Add New Address"} />
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <form>
              <FormRaw>
                <LefttSide>
                  <InputWithLabel
                    label={"First Name"}
                    placeholder={"Enter First Name"}
                  />
                </LefttSide>
                <RightSide>
                  <InputWithLabel
                    label={"Last Name"}
                    placeholder={"Enter Last Name"}
                  />
                </RightSide>
              </FormRaw>
            </form>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </>
  );
};
