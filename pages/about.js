import Layout from '../components/Layout';
import Head from '../components/Head';
import React, { Component } from 'react';
//import styles from './DashedBox.css';

class Index extends Component {

  state = {}

  componentDidMount() {
    let Scripts = [
      
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
          <Layout page='about'/>
        </body>
      </html>
    );
  }
}

export default Index;