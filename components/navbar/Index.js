import React, { Component } from "react";


import Notification from "./notification";
import Profile from "./profile";

class NavBar extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <button
                id="minimizeSidebar"
                className="btn btn-just-icon btn-white btn-fab btn-round"
              >
                <i className="material-icons text_align-center visible-on-sidebar-regular">
                  more_vert
                </i>
                <i className="material-icons design_bullet-list-67 visible-on-sidebar-mini">
                  view_list
                </i>
              </button>
            </div>
            <a className="navbar-brand" href="#pablo">
              Dashboard
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
            <span className="navbar-toggler-icon icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <Notification />
              <Profile/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
