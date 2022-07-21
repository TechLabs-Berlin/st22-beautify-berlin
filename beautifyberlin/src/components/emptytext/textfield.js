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
import {
  doc,
  serverTimestamp,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../../firebase";

export default function Emptyfield() {
  const [buttonPopup, setButtonPopup] = useState(false);

  const [reason, setReason] = useState("");

  const handleChange = event => {
    setReason(event.target.value);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (name && email && address) {
      console.log(name, email, address);
    }
  };

  const handleAdd = async e => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "cities"), {
        name: "Los Angeles",
        state: "CA",
        country: "USA",
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={(handleAdd, handleSubmit, () => setButtonPopup(true))}>
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
            onChange={e => setName(e.target.value)}
            required
            id="outlined-required"
            label="First Name, Last Name"
            defaultValue=""
          />
          <TextField
            onChange={e => setEmail(e.target.value)}
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
          <TextField
            onChange={e => setAddress(e.target.value)}
            required
            id="outlined-required"
            label="Address of the Box"
            defaultValue=""
          />
          <TextField
            required
            id="datetime-local"
            label="Time of inspection"
            type="datetime-local"
            defaultValue="2022-07-21T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl
            variant="filled"
            sx={{ m: 2, width: "80%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Environment
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
              <MenuItem value={10}>Side street</MenuItem>
              <MenuItem value={20}>Main street</MenuItem>
              <MenuItem value={30}>Park</MenuItem>
              <MenuItem value={40}>Public spot</MenuItem>
              <MenuItem value={50}>Playground</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <TextField
          sx={{ m: 2, width: "80%" }}
          id="outlined-multiline-static"
          label="Please give further information about the electric box"
          multiline
          rows={4}
          defaultValue=""
        />
        <p>
          <Button
            type="submit"
            variant="filled"
            startIcon={<DoubleArrowRoundedIcon />}
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
            Submit
          </Button>
          <Button
            variant="filled"
            startIcon={<HighlightOffIcon />}
            sx={{
              color: "black",
              margin: 2,
              backgroundColor: "#d8d8d8",
            }}
          >
            Cancel
          </Button>
        </p>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Submission Succesful</h3>
          <p>Thank you for beautifying Berlin.</p>
        </Popup>
        <div className="space"></div>
      </form>
    </>
  );
}
