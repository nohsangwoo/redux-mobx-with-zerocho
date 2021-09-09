import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
// import sagaMiddleware from "./sagas/sagaMiddleware";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

// const firstMiddleware = (store) => (next) => (action) => {
//   console.log("first activate!");
// };
const applyMiddlewareWrapper = applyMiddleware(
  ReduxThunk, // thunk는 extreaParameter옵션을 붙일수 있음
  sagaMiddleware, // sagaMiddleware적용
  logger
);

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddlewareWrapper)
    : composeWithDevTools(applyMiddlewareWrapper);
// console.log("enhancer", enhancer);
const store = createStore(reducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
