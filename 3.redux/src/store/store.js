import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// const firstMiddleware = (store) => (next) => (action) => {
//   console.log("first activate!");
// };

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;
