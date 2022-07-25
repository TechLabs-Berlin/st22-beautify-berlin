import React from "react";
import StatusChange from "../../components/statuschange/StatusChange";
import { Button } from "@mui/material";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import { height } from "@mui/system";
import { Height } from "@mui/icons-material";

export default function Changestatus() {
  return (
    <div>
      <>
        <div
          style={{
            marginLeft: 30,
            marginTop: 40,
            marginRight: 30,
            height: "100vh",
          }}
        >
          <h1>Change the status of the electric box</h1>
          <StatusChange />
          <p>
            <Link to="/upload" className="link">
              <Button
                variant="outlined"
                startIcon={<PublishedWithChangesIcon />}
                sx={{
                  color: "black",
                  borderColor: "black",
                  margin: 1,
                  marginRight: 2,
                  "&:hover": {
                    backgroundColor: "#f2deff",
                    borderColor: "black",
                  },
                }}
              >
                Change
              </Button>
            </Link>
            <Link to="/upload" className="link">
              <Button
                variant="outlined"
                startIcon={<HighlightOffIcon />}
                sx={{
                  color: "black",
                  borderColor: "black",
                  "&:hover": {
                    backgroundColor: "#f2deff",
                    borderColor: "black",
                  },
                }}
              >
                Cancel
              </Button>
            </Link>
          </p>
        </div>
      </>
    </div>
  );
}
