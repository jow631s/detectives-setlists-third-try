import React from "react";
import { Paper, Typography } from "@mui/material";
import songApi from "../../services/SongListAPI"
import Navbar from "../molecules/Navbar";


const SongListPage = () => {
  const songList = songApi.getData();
  console.log(songList);
  this.setState(songList);
  
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
                {songList.map(({ title, detectivesKey, id }) => (
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
}

export default SongListPage;