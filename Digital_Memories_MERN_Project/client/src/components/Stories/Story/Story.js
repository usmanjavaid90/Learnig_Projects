import React from "react";
import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../../actions/stories";

const Story = ({ story, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <div>
        <Typography variant="h6"> {story.creator} </Typography>
        <Typography variant="body2"> {moment(story.createdAt).fromNow()} </Typography>
      </div>
      <div>
        <Button style={{ color: "black" }} size="small" onClick={() => setCurrentId(story._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <Typography variant="h5" gutterBottom>
        {story.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {story.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => dispatch(deleteStory(story._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Story;
