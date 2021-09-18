import React from "react";
import { Typography } from "@mui/material";

const Setlist = ({ setNumber, songs }) => {
    
  return (
    <>
      <h1>Set {setNumber + 1}</h1>
      {songs.map(({title, detectivesKey}) => <Typography variant="h4" gutterBottom component="div">{`${title} -- ${detectivesKey}`}</Typography>)}
    </>
  );
};

export default Setlist;