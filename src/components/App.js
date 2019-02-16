import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "../pages/Sidebar";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ClassesList from "../pages/views/ClassesList";
import MentorList from "../pages/views/MentorList";
import ResourcesList from "../pages/views/ResourceList";
import Comments from "../pages/views/Comments";

import { Layout } from "antd";

class App extends Component {
  state = { loggedIn: false };
  onChange = this.onChange.bind(this);

  onChange(checked) {
    this.setState({ loggedIn: checked });
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <BrowserRouter>
          <div>
            <Navbar onChange={this.onChange} />
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div>
            <Navbar onChange={this.onChange} />
            <Layout style={{ minHeight: "90vh", zIndex: "-1" }}>
              <Sidebar />
              <Layout>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/classes" component={ClassesList} />
                <Route path="/resourcelist" component={ResourcesList} />
                <Route path="/discussionboard" component={Comments} />
                <Route path="/mentorlist" component={MentorList} />
              </Layout>
            </Layout>
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
