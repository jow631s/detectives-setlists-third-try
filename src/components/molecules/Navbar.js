import React, { useState } from "react";
import songList from "../../songList";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "1em", marginBottom: "1em" }}
      >
        <Grid item xs={3}></Grid>
        <Grid item xs>
          <Button variant="contained" component={Link} to={"/create-setlist"}>
            Generate Setlists
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={"/"}
          >
            Home
          </Button>
        </Grid>
        <Grid item xs>
          <Button variant="contained" component={Link} to="/all-songs">
            See All Songs
          </Button>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
