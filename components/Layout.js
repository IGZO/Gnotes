import React, { Component } from 'react';

import Sidebar from './SideBar';
import NavBar from './NavBar';
import Content from './Content.js';
import Footer from './Footer';

class Layout extends Component {
  state = {}
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <Sidebar />
          <div className="main-panel">
            <NavBar />
            <div className="content">
              <Content />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;