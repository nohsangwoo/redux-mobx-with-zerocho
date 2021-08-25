import produce from "immer";

const initialState = [];
const postReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "ADD_POST":
        draft.postList = [...state, action.data];
        break;
      default:
        return state;
    }
  });
};

export default postReducer;
