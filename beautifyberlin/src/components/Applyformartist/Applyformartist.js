import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
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

        <box>
          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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

          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              District
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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

          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Environment
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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

          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Number Artist
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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
          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Experience
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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

          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Replaced
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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

          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              Content
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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

          <FormControl
            variant="filled"
            sx={{ m: 2, width: "20%", textAlign: "left" }}
            required
          >
            <InputLabel id="demo-simple-select-filled-label">
              User Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
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
        </box>
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
            Apply
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
      </form>
    </>
  );
}
