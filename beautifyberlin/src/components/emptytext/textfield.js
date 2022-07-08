import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Popup from "../../components/Popup/Popup";

export default function Emptyfield() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [reason, setReason] = useState("");

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && address) {
      console.log(name, email, address);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": {
              m: 2,
              width: "25ch",
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
          <TextField
            onChange={(e) => setAddress(e.target.value)}
            required
            id="outlined-required"
            label="Address of the Box"
            defaultValue=""
          />
          <TextField
            required
            id="datetime-local"
            label="Time to paint"
            type="datetime-local"
            defaultValue="2022-07-21T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl variant="filled" sx={{ m: 2, width: "38ch" }} required>
            <InputLabel id="demo-simple-select-filled-label">
              Why should this electric box be painted?
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={reason}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Dirty</MenuItem>
              <MenuItem value={20}>Clean, but a painting suits it</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          sx={{ m: 2, width: "48ch" }}
          id="outlined-multiline-static"
          label="Describe the environment in which the box is located"
          multiline
          rows={4}
          defaultValue=""
        />
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
      </form>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Submission Succesful</h3>
        <p>Thank you for beautifying Berlin.</p>
      </Popup>
    </>
  );
}
