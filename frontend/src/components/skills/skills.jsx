import React, { Component } from "react";
import "./skills.css";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="skill">
        <div className="title">
          <h1>Skills</h1>
        </div>
        <div className="quote">
          <h1>
            It is possible to fly without motors, but not without knowledge and
            skill.
          </h1>
          <div className="author">
            <h3>- Wilbur Wright</h3>
          </div>
        </div>

            <div className="mainskillsec">
                
            </div>
      </section>
    );
  }
}

export default Skill;
