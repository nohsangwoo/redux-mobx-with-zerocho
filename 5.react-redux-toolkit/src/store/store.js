import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const firstMiddleware = (store) => (next) => (action) => {
  console.log("first activate!");
};

const store = configureStore({
  reducer,
  // middleware: [firstMiddleware],
  // devTools: process.env.NODE_ENV !== "production",
  devTools: true,
});

export default store;
