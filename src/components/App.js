import React, { Component } from "react";
import Navbar from "./Navbar";
import MentorList from "./MentorList";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MentorList />
      </div>
    );
  }
}

export default App;
