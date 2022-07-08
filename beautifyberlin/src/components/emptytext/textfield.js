import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function Emptyfield() {
  const [reason, setReason] = React.useState("");

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 2,
            width: "25ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="First Name, Last Name"
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
          />
          <TextField
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
        </div>
      </Box>
      <TextField
        sx={{ m: 2, width: "48ch" }}
        id="outlined-multiline-static"
        label="Describe the environment in which the box is located"
        multiline
        rows={4}
        defaultValue=""
      />
    </>
  );
}
