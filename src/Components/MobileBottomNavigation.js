import * as React from "react";
import Box from "@mui/joy/Box";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Person from "@mui/icons-material/Person";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Link } from "react-router-dom";

export const TabsBottomNavExample = () => {
  const [index, setIndex] = React.useState(0);
  const colors = ["primary", "danger", "success", "warning"];
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}>
      <Tabs
        size="lg"
        aria-label="Bottom Navigation"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={(theme) => ({
          boxShadow: theme.shadow.sm,
          "--joy-shadowChannel": theme.vars.palette[colors[index]].darkChannel,
          [`& .${tabClasses.root}`]: {
            flex: 1,
            transition: "0.3s",
            fontWeight: "md",
            fontSize: "md",
            [`&:not(.${tabClasses.selected}):not(:hover)`]: {
              opacity: 0.7,
            },
          },
        })}>
        <TabList size="sm" disableUnderline>
          <Tab disableIndicator orientation="vertical">
            <Link to={"/"}>
              <ListItemDecorator>
                <HomeRoundedIcon
                  fontSize="xl"
                  sx={{ color: "var(--primary)" }}
                />
              </ListItemDecorator>
            </Link>
            Home
          </Tab>
          <Tab disableIndicator orientation="vertical">
            <Link>
              <ListItemDecorator>
                <CategoryOutlinedIcon
                  fontSize="xl"
                  sx={{ color: "var(--primary)" }}
                />
              </ListItemDecorator>
            </Link>
            Category
          </Tab>
          <Tab disableIndicator orientation="vertical">
            <Link>
              <ListItemDecorator>
                <Person fontSize="xl" sx={{ color: "var(--primary)" }} />
              </ListItemDecorator>
            </Link>
            Profile
          </Tab>
          <Tab disableIndicator orientation="vertical">
            <Link>
              <ListItemDecorator>
                <LocalMallOutlinedIcon
                  fontSize="xl"
                  sx={{ color: "var(--primary)" }}
                />
              </ListItemDecorator>
            </Link>
            Bag
          </Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};
