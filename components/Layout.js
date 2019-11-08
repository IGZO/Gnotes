import Sidebar from './SideBar';
import NavBar from './NavBar';
import Content from './Content.js';
import Footer from './Footer';

const layoutStyle = {
  
};

const Layout = props => (
  <div>
    <div className="wrapper ">
      <Sidebar/>
      <div className="main-panel">
        <NavBar/>
        <div className="content">
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
);

export default Layout;