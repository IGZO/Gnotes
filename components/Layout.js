import React, { Component } from "react";

import Sidebar from "./sidebar/Index";
import NavBar from "./navbar/Index";
import Dashboard from "./dashboard/Index";
import Footer from "./Footer";
import Teacher from "./Teachers/index"

class Layout extends Component {
  state = {};
  componentDidMount() {}
  renderSwitch(page) {
    switch(page) {
      case 'index':
        return <Dashboard/> ;
      case 'teacher':
        return  <Teacher/>;
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
