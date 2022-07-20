import React from "react";
import { useState } from "react";
import { FormControlLabel, Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormLabel } from "@mui/material";
import { FormControl } from "@mui/material";

export default function StatusChange() {
  const [category, setCategory] = useState("art");
  return (
    <div style={{ marginLeft: 20, marginTop: 20 }}>
      <FormControl>
        <FormLabel>Please select the current status</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel
            value="art"
            control={<Radio />}
            label="Art"
            sx={{
              color: "rgba(100, 75, 150, 1)",
            }}
          />
          <FormControlLabel
            value="clean"
            control={<Radio />}
            label="Clean"
            sx={{
              color: "rgba(0, 128, 0, 1)",
            }}
          />
          <FormControlLabel
            value="dirty"
            control={<Radio />}
            label="Dirty"
            sx={{
              color: "rgba(255, 0, 0, 1)",
            }}
          />
          <FormControlLabel
            value="poster"
            control={<Radio />}
            label="Poster"
            sx={{
              color: "rgba(22, 159, 234, 1)",
            }}
          />
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="None"
            sx={{
              color: "rgba(0, 0, 0, 1)",
            }}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
