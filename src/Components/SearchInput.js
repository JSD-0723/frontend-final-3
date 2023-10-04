import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = ({ value, onChange }) => {
  return (
    <>
      <Input
        sx={{ width: "30vw" }}
        variant="solid"
        startDecorator={<SearchIcon />}
        placeholder="Search for products or brands....."
        value={value}
        onChange={onChange}
      />
    </>
  );
};
