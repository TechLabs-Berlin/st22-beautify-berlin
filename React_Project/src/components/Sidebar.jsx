import React from "react";
import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex="1"
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
