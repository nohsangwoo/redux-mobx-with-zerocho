import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addPost } from "./store/actions/postAction";
import { logIn } from "./store/actions/userAction";
import userSlice from "./store/reducers/user";
import postSlice from "./store/reducers/post";
function App() {
  const { user, posts } = useSelector((state) => state);

  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(
      logIn({
        id: 1,
        password: "1234",
        nickName: "Sangwoo Noh",
      })
    );
  }, []);

  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  const onClearPost = useCallback(() => {
    dispatch(postSlice.actions.clearPost());
  }, []);
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>로그인 상태</div>
        <div>{user.loginState}</div>
      </div>
      {user.data ? <div>{user.data.nickName}</div> : "please login"}
      <button onClick={onClick}>Login</button>
      <button onClick={onLogOut}>LogOut</button>
      <button onClick={onAddPost}>add new post</button>
      <button onClick={onClearPost}>Clear post</button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <div>{posts?.isLoading ? "새게시물 작성중" : ""}</div>
        {posts.data.map((postData, index) => {
          return (
            <div key={index}>
              <div>{postData.title}</div>
              <div>{postData.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
