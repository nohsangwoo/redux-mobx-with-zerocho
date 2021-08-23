import { createStore } from "redux";

const reducer = () => {};

initialState = {
  compA: "a",
  compB: 12,
  compC: null,
};
const store = createStore(reducer, initialState);

console.log(store.getState());
