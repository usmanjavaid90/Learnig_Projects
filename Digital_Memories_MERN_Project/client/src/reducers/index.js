import { combineReducers } from "@reduxjs/toolkit";
import stories from "./stories";
import auth from "./auth";

export default combineReducers({ stories, auth });
