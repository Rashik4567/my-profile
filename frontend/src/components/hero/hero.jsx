import React, { Component } from "react";
import "./hero.css";
import img from "../../assets/images/hero.png";
import Glow from "../glowing/glow"

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="hero">

        

        <div className="herobackground">
          <Glow />
          
        </div>

        <div className="herotop">
        
        <div className="triangle t">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </div>
        <div className="triangle t1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </div>
        <div className="triangle t2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </div>

        <div className="rectangle r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="110"
            fill="currentColor"
            className="bi bi-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          </svg>
        </div>
        <div className="rectangle r1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="110"
            fill="currentColor"
            className="bi bi-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          </svg>
        </div>
        <div className="rectangle r2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="110"
            height="110"
            fill="currentColor"
            className="bi bi-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          </svg>
        </div>
        </div>



        

        <div className="hs">
          <div className="left">
            <h3>Hello</h3>
            <h1>
              I am <span>Rashik</span>
            </h1>
            <h3>I am a full stack web developer.</h3>
          </div>
          <div className="right">
            <div className="imgcircle">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
