import { useState, useEffect, useCallback } from "react";
import songList from "../songList";

const useCreatedSetlists = (numOfSets) => {
  const [createdSetlists, setCreatedSetlists] = useState([]);
  const numOfSongsInSet = 16;

  const createSets = useCallback(
    (numOfSets) => {
      const closers = songList.filter((song) => song.isCloser === true);
      const nonClosers = songList.filter((song) => song.isCloser === false);

      const nikiSongs = nonClosers.filter((song) => {
        return song.leadSinger === "n";
      });
      const jSongs = nonClosers.filter((song) => {
        return song.leadSinger === "j";
      });
      const richardSongs = nonClosers.filter((song) => {
        return song.leadSinger === "r";
      });
      const toadSongs = nonClosers.filter((song) => {
        return song.leadSinger === "t";
      });

      //this is a reminder for the future so we can have options for adding instrumentals and using a 'closer' property
      //const instrumentals = songList.filter((song) => song.leadSinger === "x");
      //const closers = songList.filter((song) => song.closer === "y");

  //     currentSong.id = song;
  // currentSong.isInRotation = getRandomItemInArray([true, false]);
  // //assuming runTime will be stored as seconds, so randomly assigning some times between 2 minutes and 4 minutes
  // currentSong.runTime = getRandomItemInArray([120, 150, 180, 210, 240])
  // currentSong.starRating = getRandomItemInArray([1, 2, 3, 4, 5])
  // currentSong.timeoutPeriod = getRandomItemInArray([1, 2, 3])
  // currentSong.tempoRating = getRandomItemInArray([1, 2, 3, 4])
  // currentSong.beatType = getRandomItemInArray([1, 2, 3, 4])
  // currentSong.tags = getRandomItemInArray([{tags:'needs work'}, {tags:'wedding hit'}, {tags:'must have Richie'}])


      const placeholderSong = {
        title: "Not enough songs",
        detectivesKey: "so make fewer sets",
        id:`${Math.random().toString(36).substr(2, 9)}`,
        isInRotation:false,
        runTime:120,
        starRating:0,
        timeoutPeriod:1,
        tempoRating:1,
        beatType:1,
        tags:{tags: 'placeholder'}
      };

      const selectAndRemoveRandomRemainingSong = (subsetOfSongs) => {
          if (subsetOfSongs.length > 0) {
              let randomIndex = Math.floor(Math.random() * subsetOfSongs.length);
              const song = subsetOfSongs[randomIndex];
              subsetOfSongs.splice(randomIndex, 1);
              return song;
          } else {
              return {...placeholderSong, id:`${Math.random().toString(36).substr(2, 9)}`};
          }
      };

      let setListContainer = [];
      for (let i = 0; i < numOfSets; i++) {
        let innerContainer = [];
        for (let j = 0; j < numOfSongsInSet - 1; j++) {
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
        innerContainer.push(selectAndRemoveRandomRemainingSong(closers))
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
