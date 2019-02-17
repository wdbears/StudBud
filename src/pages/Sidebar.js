import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import firebase, { database } from "../components/Firebase/firebase";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const styles = {
  loggo: {
    height: "32px",
    background: "rgba(255,255,255,.2)",
    margin: "16px"
  }
};

class Sidebar extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub0"],
      items: []
    };
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  componentDidMount() {
    const ref = database.ref(
      firebase.auth().currentUser.uid + "/classSubscriptions/"
    );
    ref.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          course_title: items[item].course_title,
          course_id: items[item].nyu_course_id
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        width={300}
        style={{ background: "#fff" }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub0"]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          {this.state.items.map(item => {
            return (
              <SubMenu
                key={"sub" + item.id}
                title={
                  <span>
                    <Icon type="mail" />
                    <span>{item.course_title}</span>
                  </span>
                }
              >
                <Menu.Item key={"1" + item.id}>
                  <Link to="resourcelist">Resources</Link>
                </Menu.Item>
                <Menu.Item key={"2" + item.id}>
                  <Link to="discussionboard">Discussion</Link>
                </Menu.Item>
                <Menu.Item key={"3" + item.id}>
                  <Link to="mentorlist">Mentors</Link>
                </Menu.Item>
              </SubMenu>
            );
          })}
          {/* Add Class */}
          <Menu.Item key="0" style={{ position: "absolute", bottom: 5 }}>
            <Icon type="plus" />
            <span style={{ fontSize: 20 }}>
              <Link to="/classes">Add Class</Link>
            </span>
          </Menu.Item>
        </Menu>
        <div style={styles.loggo} />
      </Sider>
    );
  }
}

export default Sidebar;
