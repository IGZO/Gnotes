import React, { Component } from "react";

class User extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div className="user">
        <div className="photo">
          <img src="static/assets/img/faces/avatar.jpg" />
        </div>
        <div className="user-info">
          <a
            data-toggle="collapse"
            href="#collapseExample"
            className="username"
          >
            <span>
              UserName
              <b className="caret"></b>
            </span>
          </a>
          <div className="collapse" id="collapseExample">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="sidebar-mini"> MP </span>
                  <span className="sidebar-normal"> My Profile </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="sidebar-mini"> EP </span>
                  <span className="sidebar-normal"> Edit Profile </span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span className="sidebar-mini"> S </span>
                  <span className="sidebar-normal"> Settings </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
