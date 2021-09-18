import React, { useState } from "react";
import songList from "../../songList";
import { Grid, Typography, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { BrowserRouter, Route, Link } from "react-router-dom";
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
