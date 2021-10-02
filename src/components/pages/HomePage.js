import React from "react";
import { useState } from "react";
import {
  Typography,
  Paper,
  Button,
  Grid,
  Dialog,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
} from "@mui/material";
import Navbar from "../molecules/Navbar";

const defaultFieldValues = {
  title: "",
  runtime: "",
  singer: "",
  starRating: "",
  timeoutPeriod: "",
  tonic: "",
  tempo: "",
  beatType: "",
};

const HomePage = () => {
  const [showAddSongModal, setShowAddSongModal] = useState(false);
  const [songsToAdd, setSongsToAdd] = useState([]);
  const [numberOfSongsToAdd, setNumberOfSongsToAdd] = useState(0);
  const [songsBeingAdded, setSongsBeingAdded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState("");
  const [showSnack, setShowSnack] = useState(false);

  const handleAddSongs = async () => {
    setLoading(true);
    // try {
    //   await Song.addMultipleSongs(songsBeingAdded)
    //   setSnack('Songs Added!')
    // } catch (error) {
    //   console.error(error)
    //   setSnack('Error adding songs')
    // }
    setLoading(false);
    setShowSnack(true);
    setShowAddSongModal(false);
    setSongsBeingAdded(false);
    setSongsToAdd([]);
    setNumberOfSongsToAdd(1);
  };

  const prepareEmptyFormFields = (numFields) => {
    let songsToAddContainer = [];
    for (let i = 0; i < numFields; i++) {
      songsToAddContainer.push(defaultFieldValues);
    }
    return songsToAddContainer;
  };

  const handleChangeNumberOfSongsToAdd = (value) => {
    setNumberOfSongsToAdd(value);
    setSongsBeingAdded(true);
    setSongsToAdd(prepareEmptyFormFields(value));
  };

  const handleTextFieldChange = (e) => {
    console.log(e);
    console.log(e.target);

    const target = e.target;
    const index = Number(target.id);
    const value = target.value;
    const name = target.name;
    const updatedSong = { ...songsToAdd[index], [name]: value };
    let updatedSongs = songsToAdd;
    updatedSongs.splice(index, 1, updatedSong);
    setSongsToAdd([...updatedSongs]);
  };

  const tableColumns = Object.keys(defaultFieldValues);

  return (
    <>
      <Navbar></Navbar>
      <div style={{ textAlign: "center" }}>
        <Paper elevation={6} style={{ margin: "2em", padding: "2em" }}>
          <Typography variant="h2">Let's Build Some Setlists!</Typography>
        </Paper>
      </div>
      <Grid container justifyContent="center">
        <Grid item>
          <Button variant="outlined" onClick={() => setShowAddSongModal(true)}>
            Add Songs
          </Button>
        </Grid>
      </Grid>
      <Dialog open={showAddSongModal} fullWidth={true} maxWidth="lg">
        <Grid container justifyContent='center'>

        <Button variant='contained'
          onClick={() => {
            setShowAddSongModal(false);
            setSongsBeingAdded(false);
            setNumberOfSongsToAdd(0);
          }}
        >
          Cancel
        </Button>
        </Grid>
        {numberOfSongsToAdd === 0 && (
          <div textAlign="center" justifyContent="center">
            <Grid container justifyContent="center">
              <Grid item>
                <TextField
                  disabled={false}
                  id="number-of-songs-to-add"
                  select
                  label="Select"
                  value={numberOfSongsToAdd}
                  onChange={(e) =>
                    handleChangeNumberOfSongsToAdd(e.target.value)
                  }
                  helperText="Add Up To Five Songs At A Time"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </div>
        )}
        {numberOfSongsToAdd > 0 && (
          <>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    {tableColumns.map((columnName, index) => (
                      <TableCell
                        key={index}
                        style={{ width: "10%", padding: "0.3em" }}
                      >
                        {columnName}{" "}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {songsToAdd &&
                    songsToAdd.map((song, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          margin="none"
                          style={{ width: "40%", padding: "0.3em" }}
                        >
                          <TextField
                            value={song.title}
                            name="title"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                            fullWidth={true}
                            margin="none"
                          ></TextField>
                        </TableCell>
                        <TableCell
                          style={{ width: "10%", padding: "0.3em" }}
                          margin="none"
                        >
                          <TextField
                            value={song.runtime}
                            name="runtime"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                            margin="none"
                          ></TextField>
                        </TableCell>
                        <TableCell style={{ width: "20%", padding: "0.3em" }}>
                          <TextField
                            value={song.singer}
                            name="singer"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                          ></TextField>
                        </TableCell>
                        <TableCell style={{ width: "5%", padding: "0.3em" }}>
                          <TextField
                            value={song.starRating}
                            name="starRating"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                          ></TextField>
                        </TableCell>
                        <TableCell style={{ width: "5%", padding: "0.3em" }}>
                          <TextField
                            value={song.timeoutPeriod}
                            name="timeoutPeriod"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                          ></TextField>
                        </TableCell>
                        <TableCell style={{ width: "5%", padding: "0.3em" }}>
                          <TextField
                            value={song.tonic}
                            name="tonic"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                          ></TextField>
                        </TableCell>
                        <TableCell style={{ width: "5%", padding: "0.3em" }}>
                          <TextField
                            value={song.tempo}
                            name="tempo"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                          ></TextField>
                        </TableCell>
                        <TableCell style={{ width: "10%", padding: "0.3em" }}>
                          <TextField
                            value={song.beatType}
                            name="beatType"
                            onChange={handleTextFieldChange}
                            id={index.toString()}
                            size="small"
                          ></TextField>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button onClick={handleAddSongs}>add songs</Button>
          </>
        )}
      </Dialog>
    </>
  );
};

export default HomePage;
