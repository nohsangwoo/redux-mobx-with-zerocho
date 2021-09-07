// when class component way
import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { userStore, postStore } from "./store";

// observer(App)과 같은 의미다
@observer
class App extends Component {
  state = observable({
    name: "",
    password: "",
  });

  constructor(props) {
    super(props);
    this.state = {
      name: false,
      password: false,
    };
  }

  onLogIn = () => {
    userStore.logIn({
      nickname: "sangwoo noh",
      password: "password",
    });
  };
  inLogOut = () => {
    userStore.logOut();
  };

  onChangeName = (e) => {
    this.state({
      name: e.tartget.value,
    });
  };
  onChangePassword = (e) => {
    this.state({
      passwor: e.target.value,
    });
  };
  render() {
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
          <button onClick={this.onClick}>로그인</button>
        ) : (
          <button onClick={this.onLogout}>로그아웃</button>
        )}
        <div>{postStore.data.length}</div>
        <div>
          <input value={this.state.name} onChange={this.onChangeName} />
          <input value={this.state.password} onChange={this.onChangePassword} />
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   return <div className="App">hello mobx</div>;
// }

// export default App;
