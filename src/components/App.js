import React, { Component } from "react";
import Navbar from "./Navbar";
import MentorList from "./MentorList";
import "./styles/App.css";
import Login from "../pages/Login";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MentorList />
        <Login />
      </div>
    );
  }
}

export default App;
