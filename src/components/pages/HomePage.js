import React from "react";
import { Typography, Paper } from "@mui/material";
import Navbar from "../molecules/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div style={{ textAlign: "center" }}>
        <Paper elevation={6} style={{ margin: "2em", padding: "2em" }}>
          <Typography variant="h2">Let's Build Some Setlists!</Typography>
        </Paper>
      </div>
    </>
  );
};

export default HomePage;
