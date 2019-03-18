import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import NewUser from "./components/NewUser";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewUser />
      </div>
    );
  }
}

export default App;
