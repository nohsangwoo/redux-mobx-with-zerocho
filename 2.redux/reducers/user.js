const initialState = {
  isLogginIn: true,
  data: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        data: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default userReducer;
