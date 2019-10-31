import Sidebar from './SideBar';
import NavBar from './NavBar';
import Content from './Content.js';
import Footer from './Footer';

const layoutStyle = {
  
};

const Layout = props => (
  <div>
    <div class="wrapper ">
      <Sidebar />
      <div class="main-panel">
        <NavBar/>
        <div class="content">
          <Content/>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
);

export default Layout;