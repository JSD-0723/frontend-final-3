import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export const NavigateButton = ({ text, onClick }) => {
  return (
    <Button
      endDecorator={<KeyboardArrowRight color="neutral" fontSize="lg" />}
      variant="plain"
      sx={{
        color: "var(--primary)",
        fontWeight: "var(--light-text)",
        fontSize: "12px",
      }}>
      {text}
    </Button>
  );
};
