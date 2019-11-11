import React, { Component } from "react";

//use this blank tempate to create new component
//import styles from './DashedBox.css';

class Profile extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link"
          href="#pablo"
          id="navbarDropdownProfile"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="material-icons">person</i>
          <p className="d-lg-none d-md-block">Account</p>
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdownProfile"
        >
          <a className="dropdown-item" href="#">
            Profile
          </a>
          <a className="dropdown-item" href="#">
            Settings
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            Log out
          </a>
        </div>
      </li>
    );
  }
}

export default Profile;
