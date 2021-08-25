import { combineReducers } from "redux";
import userSlice from "./user";
import postSlice from "./post";

const rootReducer = combineReducers({
  user: userSlice.slice,
  posts: postSlice.slice,
});

export default rootReducer;
