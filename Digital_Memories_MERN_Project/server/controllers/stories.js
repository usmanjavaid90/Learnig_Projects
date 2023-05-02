import Story from "../models/stories.js";

export const getAllStories = async (req, res) => {
  try {
    const stories = await Story.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createStory = async (req, res) => {
  try {
    const story = await Story.create(req.body);
    res.status(201).json(story);
  } catch (error) {
    res.status(409).json(error);
  }
};

export const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const story = req.body;
    const updatedStory = await Story.findByIdAndUpdate(id, story, { new: true });
    res.status(201).json(updatedStory);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    await Story.findByIdAndDelete(id);
    res.status(202).json("Successfully deleted");
  } catch (error) {
    res.status(404).json(error);
  }
};
