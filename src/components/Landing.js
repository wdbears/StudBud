import React, { Component } from "react";
import groupImg from "../images/groupstudy.jpg";

const styles = {
  background: {
    height: "92vh",
    backgroundImage: `url(${groupImg})`,
    backgroundSize: "cover",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textAlign: "center"
  },
  darkenBackground: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: "92vh"
  },
  title: {
    fontSize: 100,
    color: "white"
  },
  description: {
    fontSize: 50,
    color: "white",
    fontStyle: "italic",
    fontWeight: "regular"
  }
};

class Landing extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.darkenBackground}>
          <div style={styles.title}>
            <span className="bounceIn infinite">StudBud</span>
          </div>
          <div style={styles.description}>
            <span>Building learning communities like never before.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
