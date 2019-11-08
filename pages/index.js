import Layout from '../components/Layout';
import Head from '../components/Head';
import React, { Component } from 'react';
//import styles from './DashedBox.css';

class Index extends Component {

  state = {}

  componentDidMount() {
    let Scripts = [
      "static/assets/js/core/jquery.min.js",
      "static/assets/js/core/popper.min.js",
      "static/assets/js/core/bootstrap-material-design.min.js",
      "static/assets/js/plugins/perfect-scrollbar.jquery.min.js",
      "static/assets/js/plugins/moment.min.js",
      "static/assets/js/plugins/sweetalert2.js",
      "static/assets/js/plugins/jquery.validate.min.js",
      "static/assets/js/plugins/jquery.bootstrap-wizard.js",
      "static/assets/js/plugins/bootstrap-selectpicker.js",
      "static/assets/js/plugins/bootstrap-datetimepicker.min.js",
      "static/assets/js/plugins/jquery.dataTables.min.js",
      "static/assets/js/plugins/bootstrap-tagsinput.js",
      "static/assets/js/plugins/jasny-bootstrap.min.js",
      "static/assets/js/plugins/fullcalendar.min.js",
      "static/assets/js/plugins/jquery-jvectormap.js",
      "static/assets/js/plugins/nouislider.min.js",
      "https://cdnjs.cloudflare.com/ajax/libs/core-js/2.4.1/core.js",
      "static/assets/js/plugins/arrive.min.js",
      "https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE",
      "static/assets/js/plugins/chartist.min.js",
      "static/assets/js/plugins/bootstrap-notify.js",
      "static/assets/js/material-dashboard.js?v=2.1.0",
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
    return (
      <html>
        <Head />
        <body>
          <Layout />
        </body>
      </html>
    );
  }
}

export default Index;