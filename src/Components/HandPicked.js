import { Box, ThemeProvider } from "@mui/system";
import SunGlasses from "../Assets/SunGlasses.svg";
import HandBags from "../Assets/Handbags.svg";
import PersonalCare from "../Assets/PersonalCare.svg";
import WristWatches from "../Assets/WristWatches.svg";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/joy/Grid";
function Handpicked() {
  return (
    <Box sx={{ background: "#1B4B66" }}>
      <Typography
        level="h2"
        fontSize="2rem"
        sx={{ color: "white", pl: 3.5, pt: 3 }}>
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
        }}>
        <Card sx={{ height: 280, width: 280, borderRadius: 25, border: 0 }}>
          <CardCover>
            <img src={PersonalCare} />
          </CardCover>
          <CardCover
            sx={{
              objectFit: "cover",
              background:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 150px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#171520" fontSize="1.7rem">
              Personal Care
            </Typography>
          </CardContent>
        </Card>
        ​ ​
        <Card sx={{ height: "280px", width: 280, borderRadius: 25, border: 0 }}>
          <CardCover>
            <img src={HandBags} />
          </CardCover>
          <CardCover
            sx={{
              objectFit: "cover",
              background:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 150px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#171520" fontSize="1.7rem">
              HandBags
            </Typography>
          </CardContent>
        </Card>
        ​
        <Card sx={{ height: "280px", width: 280, borderRadius: 25, border: 0 }}>
          <CardCover>
            <img src={WristWatches} />
          </CardCover>
          <CardCover
            sx={{
              objectFit: "cover",
              background:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 150px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#171520" fontSize="1.7rem">
              Wrist Watches
            </Typography>
          </CardContent>
        </Card>
        ​
        <Card sx={{ height: "280px", width: 280, borderRadius: 25, border: 0 }}>
          <CardCover>
            <img src={SunGlasses} />
          </CardCover>
          <CardCover
            sx={{
              objectFit: "cover",
              background:
                "linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 100px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 150px)",
            }}
          />
          <CardContent sx={{ justifyContent: "flex-end" }}>
            <Typography level="title-lg" textColor="#171520" fontSize="1.7rem">
              Sun Glasses
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
export default Handpicked;
