import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./PicUpload.css";
import axios from "axios";
import { useState } from "react";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

export default function PicUpload() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
        setQuote(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="AILine">
      <Button
        onChange={getQuote}
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
      <div>
        <div className="Implement">
          <div>We think the box is:</div>
        </div>
        <div className="Implement">{quote ? <div>{quote}</div> : null}</div>
      </div>
      <div>
        <Button
          variant="outlined"
          startIcon={<PublishedWithChangesIcon />}
          sx={{
            color: "black",
            borderColor: "black",
            margin: 2,
            padding: 1,
            "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
          }}
        >
          Change status
        </Button>
      </div>
    </div>
  );
}
