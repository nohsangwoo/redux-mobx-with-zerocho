import React, { useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { logIn, logOut } from "./store/actions/userAction";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActivate: false,
    };
  }
  onClick = () => {
    this.props.dispatchLogin({
      id: 1,
      password: "1234",
      nickName: "Sangwoo Noh",
    });
  };
  onLogout = () => {
    this.props.dispatchLogOut();
  };
  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>로그인 상태</div>
          <div>{user.loginState}</div>
        </div>
        {user.data ? <div>{user.data.nickName}</div> : "please login"}
        <button onClick={this.onClick}>Login</button>
        <button onClick={this.onLogout}>logout</button>
      </div>
    );
  }
}

// function App() {
//   const { user } = useSelector((state) => state);

//   console.log("user information", user);
//   const dispatch = useDispatch();

//   const onClick = useCallback(() => {
//     dispatch(
//       logIn({
//         id: 1,
//         password: "1234",
//         nickName: "Sangwoo Noh",
//       })
//     );
//   }, []);

//   const onLogout = useCallback(() => {
//     dispatch(logOut());
//   }, []);

//   return (
//     <div className="App">
//       <div style={{ display: "flex", flexDirection: "column" }}>
//         <div>로그인 상태</div>
//         <div>{user.loginState}</div>
//       </div>
//       {user.data ? <div>{user.data.nickName}</div> : "please login"}
//       <button onClick={onClick}>Login</button>
//       <button onClick={onLogout}>logout</button>
//     </div>
//   );
// }

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapStateToDispatch = (dispatch) => ({
  dispatchLogin: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapStateToDispatch)(App);
