import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import firebase, { database } from "../components/Firebase/firebase";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const classList = [
  {
    courseTitle: "Information Theory",
    courseID: "EL-GY6063"
  },
  {
    courseTitle: "Geotechnical Engineering",
    courseID: "CE-UY3153"
  },
  {
    courseTitle: "Investment Banking and Brokerage",
    courseID: "FRE-GY6111"
  },
  {
    courseTitle: "Structural Analysis",
    courseID: "CE-UY3133"
  }
];

class Sidebar extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  constructor(props) {
    super(props);
    this.state = {
      openKeys: ["sub0"],
      objList: []
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

  componentDidUpdate() {
    console.log(this.getUserClasses());
  }

  getUserClasses() {
    var ref = database.ref(
      firebase.auth().currentUser.uid + "/classSubscriptions/"
    );
    ref.on(
      "value",
      function snapshotToArray(snapshot) {
        var returnArr = [];
        snapshot.forEach(async function(childSnapshot) {
          var item = childSnapshot.val();
          item.key = childSnapshot.key;
          await returnArr.push(item);
        });
        return returnArr;
      },
      function(errorObject) {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }

  render() {
    return (
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub0"]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ borderRight: 0 }}
        >
          {classList.map(function(item, i) {
            return (
              <SubMenu
                key={"sub" + i}
                title={
                  <span>
                    <Icon type="mail" />
                    <span>{item.courseTitle}</span>
                  </span>
                }
              >
                <Menu.Item key={"1" + i}>
                  <Link to="resourcelist">Resources</Link>
                </Menu.Item>
                <Menu.Item key={"2" + i}>
                  <Link to="discussionboard">Discussion</Link>
                </Menu.Item>
                <Menu.Item key={"3" + i}>
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
      </Sider>
    );
  }
}

export default Sidebar;
