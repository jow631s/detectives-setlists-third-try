import React, { useState, useEffect } from "react";
import songList from "../../songList";
import Setlist from "../molecules/Setlist";

const SongListPage = () => {
  const [createdSetlists, setCreatedSetlists] = useState([]);

  const nikiSongs = songList.filter((song) => {
    return song.leadSinger === "n";
  });

  const jSongs = songList.filter((song) => {
    return song.leadSinger === "j";
  });

  const richardSongs = songList.filter((song) => {
    return song.leadSinger === "r";
  });

  const toadSongs = songList.filter((song) => {
    return song.leadSinger === "t";
  });

  const instrumentals = songList.filter((song) => song.leadSinger === "x");

  const closers = songList.filter((song) => song.Closer === "y");

  const createSets = (numOfSets) => {
    const selectAndRemoveRandomRemainingSong = (singerSongs) => {
      let randomIndex = Math.floor(Math.random() * singerSongs.length);
      const { title, detectivesKey } = singerSongs[randomIndex];
      singerSongs.splice(randomIndex, 1);
      return { title: title, detectivesKey: detectivesKey };
    };
    let setListContainer = [];
    for (let i = 0; i < numOfSets; i++) {
      let innerContainer = [];
      for (let j = 0; j < 16; j++) {
        if (j % 4 === 0) {
          innerContainer.push(selectAndRemoveRandomRemainingSong(richardSongs));
        }
        if (j % 4 === 1) {
          innerContainer.push(selectAndRemoveRandomRemainingSong(nikiSongs));
        }
        if (j % 4 === 2) {
          innerContainer.push(selectAndRemoveRandomRemainingSong(jSongs));
        }
        if (j % 4 === 3) {
          innerContainer.push(selectAndRemoveRandomRemainingSong(toadSongs));
        }
      }
      setListContainer.push(innerContainer);
    }
    console.log(setListContainer);
    setCreatedSetlists(setListContainer);
  };

  console.log(richardSongs);

  return (
    <>
      <div>
        <button onClick={() => createSets(2)}>Generate Two Sets</button>
        <button onClick={() => createSets(3)}>Generate Three Sets</button>
      </div>
      {createdSetlists.length === 0 ? (
        <div>
          <h1>ALL SONGS</h1>
          {songList.map((song) => {
            const { title, detectivesKey } = song;
            return <h2>{`${title} ${detectivesKey}`}</h2>;
          })}
        </div>
      ) : (
        <>
          {createdSetlists.map((setlist, index) => (
            <Setlist setNumber={index} songs={setlist}/>
          ))}
        </>
      )}
    </>
  );
};

export default SongListPage;
