import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./store/actions/userAction";

function App() {
  const { user } = useSelector((state) => state);

  console.log("user information", user);
  const dispatch = useDispatch();

  const onLogIn = useCallback(() => {
    dispatch(
      logIn({
        id: 1,
        password: "1234",
        nickName: "Sangwoo Noh",
      })
    );
  }, [dispatch]);

  const onLogOut = useCallback(() => {
    dispatch({ type: "LOG_OUT" });
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: "HELLO_SAGA",
    });
    // dispatch({
    //   type: "HELLO_SAGA",
    // });
    // dispatch({
    //   type: "HELLO_SAGA",
    // });
  }, [dispatch]);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{user.loginState}</div>
      </div>
      {user.data ? <div>{user.data.nickName}</div> : "please login"}
      <button onClick={onLogIn}>Log In</button>
      <button onClick={onLogOut}>Log Out</button>
      <button
        onClick={() => {
          dispatch({ type: "LOG_IN" });
        }}
      >
        SAGA LOGIN
      </button>
    </div>
  );
}

export default App;
