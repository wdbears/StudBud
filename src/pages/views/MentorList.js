import React, { Component } from "react";
import { Avatar, List, Skeleton, Layout } from "antd";
import NYUClassData from "../../helperMethods/NYUClassData";
import DrawerForm from "../../components/DrawerForm.js";

const headers = new Headers();
headers.append("Authorization", "Bearer ca893b71-2357-3da0-90d3-a6d0f74fd0f7");

const { Content } = Layout;

const init = {
  method: "GET",
  cors: "no-cors",
  headers
};

const data = [
  {
    title: "Abdullah Gulfam",
    description: "Calculus",
    picture:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/s2048x2048/51925003_574089206392086_135396838256672768_n.jpg?_nc_cat=103&_nc_ht=scontent-lga3-1.xx&oh=b8837bda3879adf23e4b903b1d743656&oe=5CE64BB7"
  },
  {
    title: "Brandon Yee",
    description: "Data Structure",
    picture:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/52002814_554695864940523_1034874397195763712_n.jpg?_nc_cat=110&_nc_ht=scontent-lga3-1.xx&oh=7f2192e220de4a4055574489675b0aa8&oe=5CF1BE56"
  },
  {
    title: "Steve Wong",
    description: "Head of Computer Science",
    picture:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/48362267_347455619142954_7085968174587314176_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=877ae34a02a5cc4b0c818e13a14f53c9&oe=5CDB7115"
  },
  {
    title: "Lily Zhai",
    description: "Programming 3",
    picture:
      "https://scontent-lga3-1.xx.fbcdn.net/v/t1.15752-9/51290748_318228555494566_4388106002570936320_n.png?_nc_cat=102&_nc_ht=scontent-lga3-1.xx&oh=7f5abde975c70d70f70d688b28ae0174&oe=5CEF9ECE"
  },
  {
    title: "Dwight Schrute",
    description: "Agriculture",
    picture:
      "https://i.pinimg.com/originals/61/05/9b/61059bce4fe12ace08fb1609348b6138.jpg"
  },
  {
    title: "Jim Beasely",
    description: "Business",
    picture:
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-10/6/8/campaign_images/webdr07/someone-calculated-how-much-money-jim-spent-prank-2-3018-1444134583-0_dblbig.jpg"
  },
  {
    title: "Michael Malone",
    description: "Accounting",
    picture:
      "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=598&name=PrisonMike.jpeg"
  }
];

class MentorList extends Component {
  componentDidMount() {
    fetch(
      "https://sandbox.api.it.nyu.edu/class-roster-exp/classes?term_description=Spring 2018",
      init
    )
      .then(response => {
        return response.json(); // or .json() or .blob() ...
      })
      .then(data => {
        let classes = data.map(classData => {
          return new NYUClassData(classData);
        });
        this.setState({ classes: classes });
        // console.log(this.state.classes);
      })
      .catch(e => {
        // error in e.message
      });
  }

  render() {
    return (
      <Layout style={{ padding: "24px 24px 0" }}>
        <Content
          style={{
            background: "#fff",
            padding: 24,
            margin: 0
          }}
        >
          <div>
            <span style={{ fontSize: 45 }}>Mentors</span>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item actions={[<DrawerForm />]}>
                <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.picture} />}
                    title={item.title}
                    description={item.description}
                  />
                </Skeleton>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    );
  }
}

export default MentorList;
