import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import firebase, { database } from "../components/Firebase/firebase";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub1"],
      objList: [
        { coursename: "Intro to Scionce" },
        { coursename: "Intro to Dogs" }
      ]
    };
    this.getUserClasses = this.getUserClasses.bind(this);
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
    this.getUserClasses();
    console.log(this.state.objList[0]);
  }

  async getUserClasses() {
    var ref = database.ref(
      firebase.auth().currentUser.uid + "/classSubscriptions/"
    );
    let temp = [];
    // Attach an asynchronous callback to read the data at our posts reference
    ref.on(
      "value",
      function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          const classObj = {
            course_title: childSnapshot.key,
            nyu_course_id: childSnapshot.val().nyu_course_id
          };
          temp.push(classObj);
        });
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
    await this.setState({ objList: temp });

    console.log(temp);
  }

  render() {
    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>{}</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="resourcelist">Resources</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="discussionboard">Discussion</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="mentorlist">Mentors</Link>
            </Menu.Item>
          </SubMenu>

          {/* Add Class */}
          <Menu.Item key="0" style={{ position: "absolute", bottom: 5 }}>
            <Icon type="plus" />
            <span style={{ fontSize: 20 }}>
              <Link to="/classes">Add Class</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
