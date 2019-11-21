import React, { Component } from "react";

//use this blank tempate to create new component
import User from './user';

class SideBar extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div
        className="sidebar"
        data-color="rose"
        data-background-color="black"
        data-image="static/assets/img/sidebar-1.jpg"
      >
        <div className="logo">
          <a href="" className="simple-text logo-mini">
            Gn
          </a>
          <a href="" className="simple-text logo-normal">
            Gnotes
          </a>
        </div>
        <div className="sidebar-wrapper">
          <User/>
          <ul className="nav">
            <li className="nav-item active ">
              <a className="nav-link" href="/">
                <i className="material-icons">dashboard</i>
                <p> Dashboard </p>
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#pagesExamples"
              >
                <i className="material-icons">image</i>
                <p>
                  {" "}
                  Pages
                  <b className="caret"></b>
                </p>
              </a>
              <div className="collapse" id="pagesExamples">
                <ul className="nav">
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="../examples/pages/pricing.html"
                    >
                      <span className="sidebar-mini"> T </span>
                      <span className="sidebar-normal"> TestPage </span>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a
                      className="nav-link"
                      href="/teacher"
                    >
                      <span className="sidebar-mini"> T </span>
                      <span className="sidebar-normal"> Teachers </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
