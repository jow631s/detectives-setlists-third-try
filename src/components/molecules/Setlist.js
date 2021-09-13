import React, {useState, useEffect} from "react";

const Setlist = ({ setNumber, songs }) => {
    console.log(songs);
  return (
    <>
      <h1>Set {setNumber + 1}</h1>
      {songs.map(({title, detectivesKey}) => <h3>{`${title} -- ${detectivesKey}`}</h3>)}
    </>
  );
};

export default Setlist;