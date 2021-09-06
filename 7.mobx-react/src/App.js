// when class component way
import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import {} from "./store";

@observer
class App extends Component {
  onLogIn = () => {};
  inLogOut = () => {};
  render() {
    return <div></div>;
  }
}

export default App;

// function App() {
//   return <div className="App">hello mobx</div>;
// }

// export default App;
