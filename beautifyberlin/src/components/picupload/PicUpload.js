import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./PicUpload.css";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export default function PicUpload() {
  return (
    <div className="AILine">
      <Button
        variant="outlined"
        component="label"
        sx={{
          color: "black",
          borderColor: "black",
          margin: 2,
          backgroundColor: "#f2deff",
          ["@media (max-width:780px)"]: {
            display: "none",
          },
        }}
      >
        <AddIcon />
        Upload a picture of any electric box
        <input type="file" hidden />
      </Button>
      <Button
        variant="outlined"
        component="label"
        sx={{
          color: "black",
          borderColor: "black",
          margin: 2,
          backgroundColor: "#f2deff",
          ["@media (min-width:780px)"]: {
            display: "none",
          },
        }}
      >
        <AddIcon />
        <input type="file" hidden />
      </Button>
      <div className="let">
        <div className="Implement">
          <div>We think the box is:</div>
        </div>
        <div className="Implement">
          <div>AIAIAI</div>
        </div>
      </div>
      <div className="AILine">
        <Button
          variant="outlined"
          startIcon={<PublishedWithChangesIcon />}
          sx={{
            color: "black",
            borderColor: "black",
            margin: 2,
            padding: 1,
            "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
            ["@media (max-width:780px)"]: {
              display: "none",
            },
          }}
        >
          Change status
        </Button>
        <Button
          variant="outlined"
          startIcon={<PublishedWithChangesIcon />}
          sx={{
            color: "black",
            borderColor: "black",
            margin: 2,
            padding: 1,
            "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
            ["@media (min-width:780px)"]: {
              display: "none",
            },
          }}
        ></Button>
      </div>
    </div>
  );
}
