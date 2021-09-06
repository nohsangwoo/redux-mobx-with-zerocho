import { combineReducers } from "redux";

import userSlice from "./user";
import postSlice from "./post";

const rootReducer = combineReducers({
  user: userSlice.reducer,
  posts: postSlice.reducer,
});

export default rootReducer;
