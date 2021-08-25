import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        postList: [...state, action.data],
      };
    default:
      return state;
  }
};

const postSlice = createSlice({
  name: "post",
  initialState,
  // 동기적
  reducers: {},
  // 비동기적
  extraReducers: {},
});

export default postSlice;
