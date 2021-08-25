import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { logIn } from "./store/actions/userAction";
import userSlice from "./store/reducers/user";
function App() {
  const { user } = useSelector((state) => state);
  console.log("user information", user);
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

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>로그인 상태</div>
        <div>{user.loginState}</div>
      </div>
      {user.data ? <div>{user.data.nickName}</div> : "please login"}
      <button onClick={onClick}>Login</button>
      <button onClick={onLogOut}>LogOut</button>
    </div>
  );
}

export default App;
