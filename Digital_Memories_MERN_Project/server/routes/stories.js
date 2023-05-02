import express from "express";
import { getAllStories, createStory, updateStory, deleteStory } from "../controllers/stories.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllStories);
router.post("/", auth, createStory);
router.patch("/:id", auth, updateStory);
router.delete("/:id", auth, deleteStory);

export default router;
