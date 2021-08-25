import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogginIn: true,
  data: null,
  loginState: null,
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
    },
  },
  // 비동기적인 내용
  extraReducers: {},
});

export default userSlice;
