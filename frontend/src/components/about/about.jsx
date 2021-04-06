import React, { Component } from "react";
import "./about.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="about">
        <div className="title">
          <h1>About</h1>
        </div>
        <div className="quote">
          <h1>
            I made decisions that I regret, and I took them as learning
            experiences... I'm human, not perfect, like anybody else.
          </h1>
          <div className="author">
            <h3>- Queen Latifah</h3>
          </div>
        </div>

        <div className="mainabout">
          <span className="imtext">
            I have been developing websites and web apps for over 4 years and
            made a couple of sites including E-commerce, portfolio, social media
            and services, etc. I have a great interest in developing web apps
            specially SaaS and E-commerce websites. I can also make other custom
            sites with unique designs and animations. <br />
            <br /> My favorite options for web development is to use
            python(Django) as backend because it has one of the best security
            and optimization features with up to date service and management.
            <br />
            <br /> And for frontend, React is one of the best frontend
            frameworks in the world as it is fast, responsive, easily debug able
            and highly optimized. <br />
            <br /> But as a quick learner, I can also make use of other
            frameworks and languages also.
          </span>
        </div>
      </section>
    );
  }
}

export default About;
