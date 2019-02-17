import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import firebase, { database } from "../components/Firebase/firebase";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
var arr = [];

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
    this.getUserClasses().then(result => {
      console.log(result);
    });
  }

  // getUserClasses() {
  //   var test = [];
  //   var ref = database.ref(
  //     firebase.auth().currentUser.uid + "/classSubscriptions/"
  //   );
  //   ref.once("value").then(function(snapshot) {
  //     snapshot.forEach(function(childSnapshot) {
  //       var classObj = {
  //         course_title: childSnapshot.key,
  //         nyu_course_id: childSnapshot.val().nyu_course_id
  //       };
  //       test.push(classObj);
  //     });
  //   });
  //   // Attach an asynchronous callback to read the data at our posts reference
  //   ref.once("value", function(snapshot) {
  //     snapshot.forEach(function(childSnapshot) {
  //       var classObj = {
  //         course_title: childSnapshot.key,
  //         nyu_course_id: childSnapshot.val().nyu_course_id
  //       };
  //       test.push(classObj);
  //     });
  //     //this.setState({ objList: test });
  //     console.log(test);
  //   });
  //   //await this.setState({ objList: temp });
  // }

  getUserClasses = function() {
    var query = database.ref(
      firebase.auth().currentUser.uid + "/classSubscriptions/"
    );
    var listOfItems = [];
    return new Promise((resolve, reject) => {
      query.once("value").then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var classObj = {
            course_title: childSnapshot.key,
            nyu_course_id: childSnapshot.val().nyu_course_id
          };
          listOfItems.push(classObj);
        });
        resolve(listOfItems);
      });
    });
  };

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
