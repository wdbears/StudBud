import React, { Component } from "react";
import Navbar from "./Navbar";
import "./styles/App.css";
import Login from "../pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App;
