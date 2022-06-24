import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import MapIcon from "@mui/icons-material/Map";
import React from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#644B96",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { sm: "block" } }}>
          BeautifyBerlin
        </Typography>
        <Search>
          <InputBase
            placeholder="Search"
            sx={{ display: { xs: "none", md: "block" } }}
          />
        </Search>
        <Icons>
          <MapIcon sx={{ width: 30, height: 30 }} />
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
