import React, { Component } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import Footer from "../components/Footer";

class Index extends Component {
  state = {};

  componentDidMount() {
    let Scripts = [
      "static/assets/js/core/jquery.min.js",
      "static/assets/js/core/popper.min.js",
      "static/assets/js/core/bootstrap-material-design.min.js",
      "static/assets/js/plugins/perfect-scrollbar.jquery.min.js",
      "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE",
      "static/assets/js/plugins/chartist.min.js",
      "static/assets/js/plugins/bootstrap-notify.js",
      "static/assets/js/material-dashboard.js?v=2.1.0",
      "static/assets/demo/demo.js",
      "static/HomeCode.js"
    ];

    Scripts.forEach(element => {
      const script = document.createElement("script");
      script.src = element;
      script.async = true;
      document.body.appendChild(script);
    });
  }

  render() {
    const mystyle = {
      backgroundImage: "url(../static/assets/img/login.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    };

    return (
      <html>
        <Head />

        <div className="wrapper wrapper-full-page">
          <div
            className="page-header login-page header-filter firstCss"
            filter-color="black"
            style={mystyle}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                  <form className="form" method="" action="">
                    <div className="card card-login ">
                      <div className="card-header card-header-rose text-center">
                        <h4 className="card-title">Login</h4>
                      </div>
                      <div className="card-body ">
                        <span className="bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">face</i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="First Name..."
                            />
                          </div>
                        </span>
                        <span className="bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">email</i>
                              </span>
                            </div>
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email..."
                            />
                          </div>
                        </span>
                        <span className="bmd-form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="material-icons">lock_outline</i>
                              </span>
                            </div>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Password..."
                            />
                          </div>
                        </span>
                      </div>
                      <div className="card-footer justify-content-center">
                        <a href="#pablo" className="btn btn-rose btn-link btn-lg">
                          Lets Go
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </html>
    );
  }
}

export default Index;
