import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// const firstMiddleware = (store) => (next) => (action) => {
//   console.log("first activate!");
// };
const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(ReduxThunk))
    : composeWithDevTools(applyMiddleware(ReduxThunk));
console.log("enhancer", enhancer);
const store = createStore(reducer, enhancer);

export default store;
