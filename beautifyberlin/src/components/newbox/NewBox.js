import React from "react";
import { Button, styled } from "@mui/material";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";

export default function NewBox() {
  const SubmitButton = styled(Button)({
    color: "black",
    borderColor: "black",
    backgroundColor: "#f2deff",
    "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
  });
  return (
    <div>
      <SubmitButton>NEW</SubmitButton>
      <Button
        variant="outlined"
        startIcon={<DoubleArrowRoundedIcon />}
        sx={{
          color: "black",
          borderColor: "black",
          margin: 3,
          "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
        }}
      >
        Submit
      </Button>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          borderColor: "black",
          "&:hover": { backgroundColor: "#f2deff", borderColor: "black" },
        }}
      >
        Cancel
      </Button>
    </div>
  );
}
