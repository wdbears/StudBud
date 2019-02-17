import React, { Component } from "react";
import { Menu, Icon, Switch } from "antd";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd/lib/radio";

class Navbar extends Component {
  state = {
    current: "brand-name"
  };

  componentDidMount() {
    this.authSwitch();
  }

  componentDidUpdate() {
    this.authSwitch();
  }

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  authSwitch() {
    if (this.props.userExists) {
      return (
        <Menu.Item key="signout" style={{ float: "right" }}>
          <Button onClick={this.props.logout}>
            <Icon type="logout" />
            Signout
          </Button>
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item key="login" style={{ float: "right" }}>
          <NavLink to="/login">
            <Icon type="login" />
            Login
          </NavLink>
        </Menu.Item>
      );
    }
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ lineHeight: "63px" }}
      >
        <Menu.Item key="brand-name">
          <Link to="/">
            <Icon type="team" />
            StudBud
          </Link>
        </Menu.Item>
        <Menu.Item key="slider" style={{ float: "right" }}>
          <Switch onChange={this.props.onChange} />
        </Menu.Item>
        {this.authSwitch()}
      </Menu>
    );
  }
}

export default Navbar;
