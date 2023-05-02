import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createStory, updateStory } from "../../actions/stories";

const Form = ({ currentId, setCurrentId }) => {
  const [storyData, setStoryData] = useState({ creator: "", title: "", body: "" });
  const story = useSelector((state) => (currentId ? state.stories.find((s) => s._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (story) {
      setStoryData(story);
    }
  }, [story]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateStory(currentId, storyData));
    } else {
      dispatch(createStory(storyData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setStoryData({ creator: "", title: "", body: "" });
  };

  return (
    <Paper>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6" align="center">
          {currentId ? "Editing" : "Creating"} a Memory
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={storyData.creator}
          onChange={(e) => setStoryData({ ...storyData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={storyData.title}
          onChange={(e) => setStoryData({ ...storyData, title: e.target.value })}
        />
        <TextField
          name="body"
          variant="outlined"
          label="Body"
          fullWidth
          value={storyData.body}
          onChange={(e) => setStoryData({ ...storyData, body: e.target.value })}
        />

        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
