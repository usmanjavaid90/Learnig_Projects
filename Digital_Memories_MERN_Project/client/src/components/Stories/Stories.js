import React from "react";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import Story from "./Story/Story";
//import useStyles from './styles';

const Stories = ({ setCurrentId }) => {
  const stories = useSelector((state) => state.stories);

  return !stories.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {stories.map((story) => (
        <Grid key={story._id} item xs={12} sm={6}>
          <Story story={story} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Stories;
