import { combineReducers } from "redux";
import posts from "./posts/posts.reducer";
import users from "./users/users.reducer";

const rootReducer = combineReducers({
  posts,
  users,
});

export default rootReducer;
