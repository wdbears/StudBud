import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "../pages/Sidebar";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ClassesList from "../pages/views/ClassesList";
import { Layout } from "antd";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Layout style={{ minHeight: "90vh", zIndex: "-1" }}>
            <Sidebar />
            <Layout>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/classes" component={ClassesList} />
            </Layout>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
