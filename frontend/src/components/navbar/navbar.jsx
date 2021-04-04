import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super();
    this.state = {};
    this.onscrollnav = this.onscrollnav.bind(this);
    this.navactive = this.navactive.bind(this);
  }

  componentDidMount() {
    this.onscrollnav();
    this.navactive();
  }

  navactive() {
    const secs = document.querySelectorAll("section");
    const items = document.querySelectorAll(".navitem");

    window.addEventListener("scroll", function () {
      let current = '';
      secs.forEach(section => {
        const sectop = section.offsetTop;
        const secheight = section.clientHeight;

        if (window.pageYOffset >= sectop - secheight / 3) {
          // console.log(section.getAttribute('id'));
          current = section.getAttribute('id');
        }

      })
      items.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      })
     })

  }

  onscrollnav() {
    window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })
  }

  render() {
    return (
      <header>
        <a href="#hero">
          <div className="navitem hero active">
            <div className="hic"></div>
            <div className="logo"></div>
            <p className="name">Home</p>
          </div>
        </a>
        <a href="#exp">
          <div className="navitem exp">
            <div className="hic"></div>
            <div className="logo"></div>
            <p className="name">Experience</p>
          </div>
        </a>
        <a href="#skill">
          <div className="navitem skill">
            <div className="hic"></div>
            <div className="logo"></div>
            <p className="name">Skills</p>
          </div>
        </a>
        <a href="#portfolio">
          <div className="navitem portfolio">
            <div className="hic"></div>
            <div className="logo"></div>
            <p className="name">Portfolio</p>
          </div>
        </a>
        <a href="#contact">
          <div className="navitem contact">
            <div className="hic"></div>
            <div className="logo"></div>
            <p className="name">Contact</p>
          </div>
        </a>
      </header>
    );
  }
}

export default Navbar;
