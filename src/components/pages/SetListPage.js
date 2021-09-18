import React, { useState } from "react";
import Setlist from "../molecules/Setlist";
import { Typography, TextField } from "@mui/material";
import { Button, Paper } from "@mui/material";
import useCreatedSetlists from "../../hooks/useCreateSetlists";
import Navbar from "../molecules/Navbar";

const SetListPage = () => {
  const [numOfSetlists, setNumOfSetlists] = useState(0);
  const [numOfSetlistsToShow, setNumOfSetlistsToShow] = useState(0);
  const setlists = useCreatedSetlists(numOfSetlistsToShow);

  const handleNumOfSetsChange = (e) => {
    setNumOfSetlists(e.target.value);
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            OPTIONS
          </Typography>
          <TextField
            id="num-of-sets"
            label="Number Of Sets"
            value={numOfSetlists}
            variant="filled"
            onChange={handleNumOfSetsChange}
            style={{ margin: "1em" }}
          />
          <br />
          <Button
            variant="outlined"
            onClick={() => setNumOfSetlistsToShow(numOfSetlists)}
          >
            Create Sets
          </Button>
        </div>
      </div>

      {setlists.length > 0 && (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "75%", margin: "1em" }}>
              <Paper elevation={4}>
                <div style={{ textAlign: "left", padding: "2em" }}>
                  {setlists.map((setlist, index) => (
                    <Setlist key={index} setNumber={index} songs={setlist} />
                  ))}
                </div>
              </Paper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SetListPage;
