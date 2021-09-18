import React from "react";
import { Typography, Paper } from "@mui/material";

const Setlist = ({ setNumber, songs }) => {
  return (
    <>
      <Typography variant='h3' gutterBottom>Set {setNumber + 1}</Typography>
      {songs.map(({ title, detectivesKey }) => (
        <Typography
          variant="h4"
          gutterBottom
          component="div"
        >{`${title} -- ${detectivesKey}`}</Typography>
      ))}
      <br/>
    </>
  );
};

export default Setlist;
