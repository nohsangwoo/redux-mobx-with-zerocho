// when class component way
import React, { useCallback } from "react";
import { Observer, useLocalObservable } from "mobx-react";
import { userStore, postStore } from "./store";

// observer(App)과 같은 의미다
const App = () => {
  // 여기 컴포넌트에서만 작동하는 스토어
  // useLocalStore is deprecated
  const state = useLocalObservable(() => ({
    name: "",
    password: "",
    onChangeName(e) {
      this.name = e.target.value;
    },
    onChangePassword(e) {
      this.password = e.target.value;
    },
  }));
  const onLogIn = useCallback(() => {
    userStore.logIn({
      nickname: "sangwoo noh",
      password: "password",
    });
  }, []);

  const onLogOut = useCallback(() => {
    userStore.logOut();
  }, []);
  // userObserver is Deprecated
  return (
    <Observer>
      {() => {
        return (
          <div>
            {userStore.isLoggingIn ? (
              <div>로그인 중</div>
            ) : userStore.data ? (
              <div>{userStore.data.nickname}</div>
            ) : (
              "로그인 해주세요"
            )}
            {!userStore.data ? (
              <button onClick={onLogIn}>로그인</button>
            ) : (
              <button onClick={onLogOut}>로그아웃</button>
            )}
            <div>{postStore.data.length}</div>
            <div>
              <input value={state.name} onChange={state.onChangeName} />
              <input value={state.password} onChange={state.onChangePassword} />
            </div>
          </div>
        );
      }}
    </Observer>
  );
};

export default App;

// function App() {
//   return <div className="App">hello mobx</div>;
// }

// export default App;
