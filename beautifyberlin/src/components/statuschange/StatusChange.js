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
          <FormControlLabel value="art" control={<Radio />} label="Art" />
          <FormControlLabel value="clean" control={<Radio />} label="Clean" />
          <FormControlLabel value="dirty" control={<Radio />} label="Dirty" />
          <FormControlLabel value="poster" control={<Radio />} label="Poster" />
          <FormControlLabel value="none" control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
