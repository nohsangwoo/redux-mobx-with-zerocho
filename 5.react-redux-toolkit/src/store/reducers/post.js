import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "../actions/postAction";

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
  reducers: {
    clearPost(state, action) {
      state.data = [];
    },
  },
  // 비동기적
  extraReducers: {
    [addPost.pending](state, action) {},
    [addPost.fulfilled](state, action) {},
    [addPost.rejected](state, action) {},
  },
});

export default postSlice;
