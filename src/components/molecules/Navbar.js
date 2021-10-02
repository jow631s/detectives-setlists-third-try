import React from "react";

import { Grid, Button } from "@mui/material";

import { Link } from "react-router-dom";

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
