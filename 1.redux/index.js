import { createStore } from "redux";

const initialState = {
  user: null,
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        user: null,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.data],
      };
    default:
      state;
  }
};

const store = createStore(reducer, initialState);

// react-redux 안에 포함돼있음, 그래서 보통 react에선 쓸일이 별로 없음 에러 확인할때만 씀
store.subscribe(() => {
  // 이 안에서 화면 리렌더링 해주는 코드를 작성
  console.log("changed");
});

// action create
const login = (data) => {
  // action
  return {
    type: "LOG_IN",
    data,
  };
};

const logOut = () => {
  return {
    type: "LOG_OUT",
  };
};

const addPost = (data) => {
  return {
    type: "ADD_POST",
    data,
  };
};

// ------------------------------------------------------------------------------------------------------------------------
console.log("1st", store.getState());

store.dispatch(
  login({
    id: 1,
    name: "Sangwoo Noh",
    admin: true,
  })
);

console.log("2st", store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요. 리덕스",
  })
);

console.log("3nd", store.getState());

store.dispatch(logOut({}));

console.log("4nd", store.getState());
