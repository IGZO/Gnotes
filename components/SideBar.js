import React, { Component } from 'react';

//use this blank tempate to create new component
//import styles from './DashedBox.css';

class SideBar extends Component {
  state = {}
  componentDidMount() {

  }
  render() {
    return (
      <div className="sidebar" data-color="rose" data-background-color="black" data-image="static/assets/img/sidebar-1.jpg">
        <div className="logo">
          <a href="" className="simple-text logo-mini">
            Gn
          </a>
          <a href="" className="simple-text logo-normal">
            Gnotes
          </a>
        </div>
        <div className="sidebar-wrapper">
          <div className="user">
            <div className="photo">
              <img src="static/assets/img/faces/avatar.jpg" />
            </div>
            <div className="user-info">
              <a data-toggle="collapse" href="#collapseExample" className="username">
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
          <ul className="nav">
            <li className="nav-item active ">
              <a className="nav-link" href="../examples/dashboard.html">
                <i className="material-icons">dashboard</i>
                <p> Dashboard </p>
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" data-toggle="collapse" href="#pagesExamples">
                <i className="material-icons">image</i>
                <p> Pages
                  <b className="caret"></b>
                </p>
              </a>
              <div className="collapse" id="pagesExamples">
                <ul className="nav">
                  <li className="nav-item ">
                    <a className="nav-link" href="../examples/pages/pricing.html">
                      <span className="sidebar-mini"> P </span>
                      <span className="sidebar-normal"> Pricing </span>
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