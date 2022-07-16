import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Popup from "../../components/Popup/Popup";

export default function Applyformartist() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      console.log(name, email);
    }
  };

  return (
    <>
      <form onSubmit={(handleSubmit, () => setButtonPopup(true))}>
        <Box
          sx={{
            "& .MuiTextField-root": {
              m: 2,
              width: "80%",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            required
            id="outlined-required"
            label="First Name, Last Name"
            defaultValue=""
          />
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
        </Box>
        <TextField
          sx={{ m: 2, width: "80%" }}
          id="outlined-multiline-static"
          label="Describe your draft and what is special about it."
          multiline
          rows={4}
          defaultValue=""
          required
          inputProps={{ minLength: 50 }}
        />
        <p>
          <Button
            type="submit"
            variant="outlined"
            startIcon={<DoubleArrowRoundedIcon />}
            sx={{
              color: "black",
              borderColor: "black",
              marginLeft: 2,
              marginRight: 2,
              "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
            }}
          >
            Apply
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
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Submission Succesful</h3>
          <p>Thank you for beautifying Berlin.</p>
        </Popup>
      </form>
    </>
  );
}
