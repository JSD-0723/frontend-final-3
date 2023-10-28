import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";

const StyledLabel = styled("label")(({ theme }) => ({
  fontWeight: "var(--medium-font)",
  fontSize: "0.8rem",
}));

export const InputWithLabel = ({ placeholder, label, value }) => {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <Input
        sx={{ color: "var(--type-low-emphasis)" }}
        placeholder={placeholder}
        value={value}
        variant="solid"
        color="neutral"
        size="lg"
      />
    </>
  );
};
