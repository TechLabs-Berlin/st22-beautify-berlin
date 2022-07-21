import React from "react";
import "./VMV.css";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";

export default function VMV() {
  return (
    <section className="section">
      <div className="container">
        <h3 className="main-heading">Vision, Mission and Values</h3>
        <div className="cards">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Paper
                sx={{
                  background: "rgb(221, 221, 221)",
                  padding: "1px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  margin: "5px",
                }}
              >
                <h4>Vision</h4>
                <p>
                  Our vision is to be the first port of call for government and
                  citizens when it comes to beautifying the city.
                </p>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                sx={{
                  background: "rgb(221, 221, 221)",
                  padding: "1px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  margin: "5px",
                }}
              >
                <h4>Mission</h4>
                <p>
                  Our mission is to make cities more beautiful and livable. No
                  matter what, no matter who, no matter where.
                </p>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper
                sx={{
                  background: "rgb(221, 221, 221)",
                  padding: "1px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  margin: "5px",
                }}
              >
                <h4>Values</h4>
                <p>
                  Simplicity, Teamwork, Helpfulness, Collaboration, Quality,
                  Results, Impact, Playfulness
                </p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}
