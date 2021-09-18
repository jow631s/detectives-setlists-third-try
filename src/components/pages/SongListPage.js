import React, { useState } from "react";
import songList from "../../songList";
import Setlist from "../molecules/Setlist";
import { Grid, Typography, TextField } from "@mui/material";
import { Button } from "@mui/material";
import useCreatedSetlists from "../../hooks/useCreateSetlists";

const SongListPage = () => {
  const [numOfSetlists, setNumOfSetlists] = useState(0);
  const [numOfSetlistsToShow, setNumOfSetlistsToShow] = useState(0);  
  const setlists = useCreatedSetlists(numOfSetlistsToShow);

  const handleNumOfSetsChange = (e) => {
    setNumOfSetlists(e.target.value);
  };

  

  return (
    <>
      <div>
        <Typography variant="h3" gutterBottom>
          OPTIONS
        </Typography>
        <TextField
          id="num-of-sets"
          label="Number Of Sets"
          value={numOfSetlists}
          variant="filled"
          onChange={handleNumOfSetsChange}
        />
        <Button onClick={() => setNumOfSetlistsToShow(numOfSetlists)}>Create Sets</Button>
      </div>

      {setlists.length > 0 && (
        <>
          {setlists.map((setlist, index) => (
            <Setlist key={index} setNumber={index} songs={setlist} />
          ))}
        </>
      )}
    </>
  );
};

export default SongListPage;
