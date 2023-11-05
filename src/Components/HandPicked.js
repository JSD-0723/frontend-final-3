import { Box } from "@mui/system";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
import HandpickedCard from "./HandpickedCard";

function Handpicked({ handpicked }) {
  return (
    <Box sx={{ background: "#1B4B66" }}>
      <Typography
        level="h2"
        fontSize="2rem"
        sx={{ color: "white", pl: 3.5, pt: 3 }}
      >
        Handpicked Collections
      </Typography>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 12 }}
        sx={{
          gap: 3,
          width: 1 / 1,
          justifyContent: "space-evenly",
          py: 6,
          px: 3,
        }}
      >
        {handpicked.map((product) => {
          return <HandpickedCard product={product} />;
        })}
      </Grid>
    </Box>
  );
}
export default Handpicked;
