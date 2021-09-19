import React from "react";
import { Typography } from "@mui/material";

const Setlist = ({ setNumber, songs}) => {
  
  return (
    <>
      <Typography key={setNumber} variant='h3' gutterBottom>Set {setNumber + 1}</Typography>
      {songs.map(({ title, detectivesKey, id }) => (
        <Typography
          key={id}
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
