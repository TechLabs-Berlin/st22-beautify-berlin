import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function PicUpload() {
  return (
    <div>
      <Button
        variant="outlined"
        component="label"
        sx={{
          color: "black",
          borderColor: "black",
          margin: 2,
          backgroundColor: "#f2deff",
        }}
      >
        <AddIcon /> Upload a picture of any electric box
        <input type="file" hidden />
      </Button>
    </div>
  );
}
