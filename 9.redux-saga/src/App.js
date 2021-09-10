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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "500px",
        }}
      >
        <button
          style={{
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid black",
            background: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onLogIn}
        >
          Log In
        </button>
        <button
          style={{
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid black",
            background: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={onLogOut}
        >
          Log Out
        </button>
        <button
          style={{
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid black",
            background: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch({ type: "LOG_IN" });
          }}
        >
          SAGA LOGIN
        </button>

        <button
          style={{
            borderRadius: "10px",
            padding: "10px",
            border: "1px solid black",
            background: "white",
            fontWeight: 500,
            cursor: "pointer",
          }}
          onClick={() => {
            dispatch({ type: "HELLO_SAGA" });
          }}
        >
          HELLO_SAGA
        </button>
      </div>
    </div>
  );
}

export default App;
