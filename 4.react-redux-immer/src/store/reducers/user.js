import produce from "immer";

const initialState = {
  isLogginIn: true,
  data: null,
  loginState: null,
};
const userReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "LOG_OUT":
        draft.data = null;
        draft.isLogginIn = false;
        draft.loginState = "로그아웃 성공";
        break;
      case "LOG_IN_REQUEST":
        draft.loginState = "로그인 요청중";
        break;
      case "LOG_IN_SUCCESS":
        draft.data = action.data;
        draft.loginState = "로그인 성공";
        break;
      case "LOG_IN_FAILURE":
        draft.data = null;
        draft.loginState = "로그인 실패";
        break;
      default:
        return state;
    }
  });
};

export default userReducer;
