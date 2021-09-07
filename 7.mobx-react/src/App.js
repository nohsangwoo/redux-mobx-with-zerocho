// when class component way
import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { userStore, postStore } from "./store";

// observer(App)과 같은 의미다
@observer
class App extends Component {
  // state = observable({
  //   name: "",
  //   password: "",
  // });

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  onLogIn = () => {
    console.log("onLogin in App.js");
    userStore.logIn({
      nickname: "sangwoo noh",
      password: "password",
    });
  };
  onLogOut = () => {
    userStore.logOut();
  };

  onChangeName = (e) => {
    console.log(this.state);
    this.setState({
      name: e.target.value,
    });
  };
  onChangePassword = (e) => {
    console.log(this.state);

    this.setState({
      password: e.target.value,
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
          <button onClick={this.onLogIn}>로그인</button>
        ) : (
          <button onClick={this.onLogOut}>로그아웃</button>
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
