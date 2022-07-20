import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

export default function PicUploadArtist() {
  return (
    <div>
      <Button
        variant="filled"
        component="label"
        sx={{
          color: "black",
          margin: 2,
          backgroundColor: "#d8d8d8",
        }}
      >
        <AddIcon /> Choose a draft of your painting
        <input type="file" hidden />
      </Button>
      <Button
        sx={{
          color: "white",
          margin: 2,
          backgroundColor: "#8242c2",
          paddingLeft: 5,
          paddingRight: 5,
          "&:hover": {
            backgroundColor: "#9e64d7",
          },
        }}
      >
        {" "}
        Upload
      </Button>
    </div>
  );
}
