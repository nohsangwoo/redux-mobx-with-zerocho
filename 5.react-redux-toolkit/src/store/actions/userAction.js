import { createAsyncThunk } from "@reduxjs/toolkit";

const logIn = createAsyncThunk("user/logIn", async (data, thunkAPI) => {
  // thunk에서 getState 사용하기
  const state = thunkAPI.getState();

  // 이부분에 axios같은 데이터 요청을 날리면 됨
  // pending, fulfilled, rejected
});
export const logIn = (data) => {
  // async action creator
  return (dispatch, getState) => {
    dispatch(logInRequest());
    try {
      setTimeout(() => {
        dispatch(logInSuccess(data));
      }, 2000);
    } catch (e) {
      dispatch(loginInFailure(e));
    }
  };
};

export const logInRequest = (data) => {
  // action
  return {
    type: "LOG_IN_REQUEST",
  };
};

export const logInSuccess = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};

export const loginInFailure = (error) => {
  return {
    type: "LOG_IN_FAILURE",
    error,
  };
};
