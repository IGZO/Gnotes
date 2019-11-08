import React, { Component } from "react";

import Sidebar from "./SideBar";
import NavBar from "./NavBar";
import Dashboard from "./dashboard/Index";
import Footer from "./Footer";



class Layout extends Component {
  state = {};
  componentDidMount() {}
  renderSwitch(page) {
    switch(page) {
      case 'index':
        return <Dashboard/> ;
      case 'test':
        return  'test';
      default:
        return '404';
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <Sidebar />
          <div className="main-panel">
            <NavBar />
            <div className="content">
              {this.renderSwitch(this.props.page)}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
