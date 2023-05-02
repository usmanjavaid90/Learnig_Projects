import { CREATE, DELETE, UPDATE, FETCH_ALL } from "../constants/actionTypes";

export default (stories = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...stories, action.payload];
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
      return stories.map((story) => (story._id === action.payload._id ? action.payload : story));
    case DELETE:
      return stories.filter((story) => story._id !== action.payload);
    default:
      return stories;
  }
};
