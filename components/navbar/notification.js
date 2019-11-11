import React, { Component } from "react";

class Blank extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <li class="nav-item dropdown">
        <a
          class="nav-link"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="material-icons">notifications</i>
          <span class="notification">5</span>
          <p class="d-lg-none d-md-block">Some Actions</p>
        </a>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <a class="dropdown-item" href="#">
            Mike John responded to your email
          </a>
          <a class="dropdown-item" href="#">
            You have 5 new tasks
          </a>
          <a class="dropdown-item" href="#">
            You're now friend with Andrew
          </a>
          <a class="dropdown-item" href="#">
            Another Notification
          </a>
          <a class="dropdown-item" href="#">
            Another One
          </a>
        </div>
      </li>
    );
  }
}

export default Blank;
