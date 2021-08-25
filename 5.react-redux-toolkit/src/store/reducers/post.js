import { createSlice } from "@reduxjs/toolkit";
import { addPost } from "../actions/postAction";

const initialState = { isLoading: false, data: [] };

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
    [addPost.pending](state, action) {
      state.isLoading = true;
    },
    [addPost.fulfilled](state, action) {
      state.isLoading = false;
      state.data = action.payload;
    },
    [addPost.rejected](state, action) {
      state.isLoading = false;
      state.data = [];
    },
  },
});

export default postSlice;
