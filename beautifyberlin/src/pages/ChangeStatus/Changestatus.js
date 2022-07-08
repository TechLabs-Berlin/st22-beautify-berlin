import React from "react";
import StatusChange from "../../components/statuschange/StatusChange";
import { Button } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function Changestatus() {
  return (
    <div>
      <>
        <div style={{ marginLeft: 30, marginTop: 40, marginRight: 30 }}>
          <h1>Change the status of the electric box</h1>
          <StatusChange />
          <p>
            <Button
              variant="outlined"
              startIcon={<PublishedWithChangesIcon />}
              sx={{
                color: "black",
                borderColor: "black",
                margin: 1,
                marginRight: 2,
                "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
              }}
            >
              Change
            </Button>
            <Button
              variant="outlined"
              startIcon={<HighlightOffIcon />}
              sx={{
                color: "black",
                borderColor: "black",
                "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
              }}
            >
              Cancel
            </Button>
          </p>
        </div>
      </>
    </div>
  );
}
