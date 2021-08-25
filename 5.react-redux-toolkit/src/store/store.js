import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducers";
import { configureStore, getD } from "@reduxjs/toolkit";

const firstMiddleware = (store) => (next) => (action) => {
  console.log("first activate!");
};

const store = configureStore({
  reducer,
  middleware: [firstMiddleware],
  devTools: process.env.NODE.ENV !== "production",
});

export default store;
