import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function PicUploadArtist() {
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
        <AddIcon /> Upload a draft of your painting
        <input type="file" hidden />
      </Button>
    </div>
  );
}
