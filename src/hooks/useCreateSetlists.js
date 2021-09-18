import { create } from "@mui/material/styles/createTransitions";
import React, { useState, useEffect, useCallback } from "react";
import songList from "../songList";

const useCreatedSetlists = (numOfSets) => {
  const [createdSetlists, setCreatedSetlists] = useState([]);

  const createSets = useCallback(
    (numOfSets) => {
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

      const placeholderSong = {
        title: "Not enough songs",
        detectivesKey: "so make fewer sets",
      };

      const selectAndRemoveRandomRemainingSong = (singerSongs) => {
          if (singerSongs.length > 0) {

              let randomIndex = Math.floor(Math.random() * singerSongs.length);
              const { title, detectivesKey } = singerSongs[randomIndex];
              singerSongs.splice(randomIndex, 1);
              return { title: title, detectivesKey: detectivesKey };
          } else {
              return placeholderSong;
          }
      };
      let setListContainer = [];
      for (let i = 0; i < numOfSets; i++) {
        let innerContainer = [];
        for (let j = 0; j < 16; j++) {
          if (j % 4 === 0) {
            innerContainer.push(
                selectAndRemoveRandomRemainingSong(richardSongs)
            );
          }
          if (j % 4 === 1) {
            innerContainer.push(
              selectAndRemoveRandomRemainingSong(nikiSongs)
            );
          }
          if (j % 4 === 2) {
            innerContainer.push(
              selectAndRemoveRandomRemainingSong(jSongs)
            );
          }
          if (j % 4 === 3) {
            innerContainer.push(
              selectAndRemoveRandomRemainingSong(toadSongs)
            );
          }
        }
        setListContainer.push(innerContainer);
      }
      setCreatedSetlists(setListContainer);
    },
    []
  );

  useEffect(() => {
    createSets(numOfSets);
  }, [numOfSets, createSets]);

  return createdSetlists;
};

export default useCreatedSetlists;
