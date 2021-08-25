import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions/userAction";
const initialState = {
  isLogginIn: true,
  data: null,
  loginState: "로그인해주세요",
  email: "",
  password: "",
  prices: Array(100)
    .fill()
    .map((v, i) => (i + 1) * 100),
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_OUT":
      return {
        ...state,
        data: null,
      };
    case "LOG_IN_REQUEST":
      return {
        ...state,
        loginState: "로그인 요청중",
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        data: action.data,
        loginState: "로그인 성공",
      };
    case "LOG_IN_FAILURE":
      return {
        ...state,
        data: null,
        loginState: "로그인 실패",
      };
    default:
      return state;
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  // 동기적인내용
  reducers: {
    logOut(state, action) {
      state.data = null;
      state.loginState = "로그인해주세요";
    },
  },
  // 비동기적인 내용
  extraReducers: {
    // user/logIn/pending
    [logIn.pending](state, action) {
      state.isLogginIn = true;
      state.loginState = "로그인중...";
    },
    // user/logIn/fulfilled
    [logIn.fulfilled](state, action) {
      state.data = action.payload;
      state.isLogginIn = false;
      state.loginState = "로그인 성공";
    },
    // user/logIn/rejected
    [logIn.rejected](state, action) {
      state.data = null;
      state.isLogginIn = false;
      state.loginState = "로그인 실패";
    },
  },
});

export default userSlice;
