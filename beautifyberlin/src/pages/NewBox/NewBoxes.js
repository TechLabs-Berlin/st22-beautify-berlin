import React from "react";
import PicUpload from "../../components/picupload/PicUpload";
import Emptyfield from "../../components/emptytext/textfield";
import Popup from "../../components/Popup/Popup";
import { useState } from "react";
import { Button } from "@mui/material";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function NewBox() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <>
        <div style={{ marginLeft: 30, marginTop: 40 }}>
          <h1>Please go through the following form:</h1>
          <PicUpload />
          <Emptyfield />
          <p>
            <Button
              onClick={() => setButtonPopup(true)}
              type="submit"
              variant="outlined"
              startIcon={<DoubleArrowRoundedIcon />}
              sx={{
                color: "black",
                borderColor: "black",
                margin: 2,
                "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
              }}
            >
              Submit
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
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Submission Succesful</h3>
          <p>Thank you for beautifying Berlin.</p>
        </Popup>
      </>
    </div>
  );
}
