import Link from 'next/link';

const linkStyle = {
  
};

const SideBar = () => (
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
                Tania Andrew
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
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/rtl.html">
                    <span className="sidebar-mini"> RS </span>
                    <span className="sidebar-normal"> RTL Support </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/timeline.html">
                    <span className="sidebar-mini"> T </span>
                    <span className="sidebar-normal"> Timeline </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/login.html">
                    <span className="sidebar-mini"> LP </span>
                    <span className="sidebar-normal"> Login Page </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/register.html">
                    <span className="sidebar-mini"> RP </span>
                    <span className="sidebar-normal"> Register Page </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/lock.html">
                    <span className="sidebar-mini"> LSP </span>
                    <span className="sidebar-normal"> Lock Screen Page </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/user.html">
                    <span className="sidebar-mini"> UP </span>
                    <span className="sidebar-normal"> User Profile </span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="../examples/pages/error.html">
                    <span className="sidebar-mini"> E </span>
                    <span className="sidebar-normal"> Error Page </span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
);

export default SideBar;