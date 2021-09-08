const initialState = [];
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

export default postReducer;
