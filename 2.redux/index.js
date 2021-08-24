import { applyMiddleware, compose, createStore } from "redux";
import reducer from "./reducers";
import { addPost } from "./actions/post";
import { logIn, logOut } from "./actions/user";
// import { composeWithDevTools } from "redux-devtools-extension";
const initialState = {
  user: {
    isLogginIn: true,
    data: null,
  },
  posts: [],
};

const firstMiddleware = (store) => (next) => (action) => {
  console.log("first activate!");
};

const secondMiddleware = (store) => (next) => (action) => {
  console.log("second activate!");
};

// firstMiddleware를 일반 함수 표현으로 구현한 경우 아래와 같다.
// function firstMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       return;
//     };
//   };
// }

const thunkMiddleware = (store) => (dispatch) => (action) => {
  console.log("thunk activate!");
  if (typeof action === "function") {
    // 비동기
    return action(store.dispatch, store.getState);
  }
  return dispatch(action);
};

const enhancer = compose(
  applyMiddleware(thunkMiddleware, firstMiddleware, secondMiddleware)
);

const store = createStore(reducer, initialState, enhancer);

// react-redux 안에 포함돼있음, 그래서 보통 react에선 쓸일이 별로 없음 에러 확인할때만 씀
// store.subscribe(() => {
//   // 이 안에서 화면 리렌더링 해주는 코드를 작성
//   console.log("changed");
// });

// ------------------------------------------------------------------------------------------------------------------------
console.log("1st", store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: "Sangwoo Noh",
    admin: true,
  })
);

console.log("2st", store.getState());

// store.dispatch(
//   addPost({
//     userId: 1,
//     id: 1,
//     content: "안녕하세요. 리덕스",
//   })
// );

// const { posts } = store.getState();
// console.log("posts.postList: 3nd", posts.postList);

// store.dispatch(logOut({}));

// console.log("4nd", store.getState());
