import { styled } from "@mui/joy/styles";

const StyledPageTitle = styled("h2")(({ theme }) => ({
  color: "var(--primary)",
  fontWeight: "var(--semi-bold-font)",
  padding: "18px 15px",
}));

export const PageTitle = ({ text }) => {
  return (
    <>
      <StyledPageTitle>{text}</StyledPageTitle>
    </>
  );
};
