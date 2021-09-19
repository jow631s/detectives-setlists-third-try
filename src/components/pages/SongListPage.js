import React from "react";
import { Paper, Typography } from "@mui/material";
import songList from "../../songList";
import Navbar from "../molecules/Navbar";

const SongListPage = () => {
  const songs = songList;
  console.log(songs.filter((song) => song.isCloser === true));

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "75%", margin: "1em" }}>
          <Paper elevation={4}>
            <div style={{ padding: "3em" }}>
              <Typography variant="h3" gutterBottom align="center">
                ALL SONGS
              </Typography>
              <div style={{ textAlign: "left" }}>
                {songs.map(({ title, detectivesKey, id }) => (
                  <Typography
                    key={id}
                    variant="h4"
                    gutterBottom
                    component="div"
                  >{`${title} -- ${detectivesKey}`}</Typography>
                ))}
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default SongListPage;
