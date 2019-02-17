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
import { auth } from "./Firebase/firebase";
import Landing from "./Landing";

import { Layout } from "antd";

class App extends Component {
  state = {
    user: null
  };

  logout = this.logout.bind(this);

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  render() {
    if (!this.state.user) {
      return (
        <BrowserRouter>
          <div>
            <Navbar userExists={this.state.user} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <div>
            <Navbar logout={this.logout} userExists={this.state.user} />
            <Layout style={{ minHeight: "90vh", zIndex: "-1" }}>
              <Sidebar />
              <Layout>
                <Route exact path="/" component={ResourcesList} />
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
