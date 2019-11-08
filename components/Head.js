import React, { Component } from "react";
//use this blank tempate to create new component
//import styles from './DashedBox.css';

class Head extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <head>
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="static/assets/img/apple-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="static/assets/img/favicon.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Gnotes</title>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
          name="viewport"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
        />
        <link
          href="static/assets/css/material-dashboard.css?v=2.1.0"
          rel="stylesheet"
        />
        <link href="static/assets/demo/demo.css" rel="stylesheet" />
      </head>
    );
  }
}

export default Head;
