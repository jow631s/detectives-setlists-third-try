import React from "react";

const Setlist = ({ setNumber, songs }) => {
    
  return (
    <>
      <h1>Set {setNumber + 1}</h1>
      {songs.map(({title, detectivesKey}) => <h3 key={title}>{`${title} -- ${detectivesKey}`}</h3>)}
    </>
  );
};

export default Setlist;