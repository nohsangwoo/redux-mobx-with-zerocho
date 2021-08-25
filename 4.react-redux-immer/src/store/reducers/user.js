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
        loginState: "로그아웃 성공",
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

export default userReducer;
