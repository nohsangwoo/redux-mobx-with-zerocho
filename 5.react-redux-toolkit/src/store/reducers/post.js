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
  extraReducers: (builder) =>
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
      })
      // 여러 액션중 공통되는 로직이 있다면 조건을 걸어서 해결해버릴수있음
      // 예를들면 로딩부분..
      .addMatcher(
        (action) => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addDefaultCase((state, action) => {
        //  default
      }),
});

export default postSlice;
