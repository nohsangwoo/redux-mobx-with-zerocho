// when class component way
import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { userStore, postStore } from "./store";

// observer(App)과 같은 의미다
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: false,
      password: false,
    };
  }
  userStore;
  onLogIn = () => {};
  inLogOut = () => {};

  onChangeName = (e) => {
    this.setState({
      name: e.tartget.value,
    });
  };
  onChangePassword = (e) => {
    this.setState({
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
