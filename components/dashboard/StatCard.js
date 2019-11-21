import React, { Component } from "react";

//use this blank tempate to create new component
//import styles from './DashedBox.css';

class StatCard extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className={'card-header card-header-'+this.props.data.color+' card-header-icon'}>
            <div className="card-icon">
              <i className="material-icons">{this.props.data.icon}</i>
            </div>
            <p className="card-category">{this.props.data.title}</p>
            <h3 className="card-title">{this.props.data.value}</h3>
          </div>
          <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">update</i> Just Updated
                  </div>
                </div>
        </div>
      </div>
    );
  }
}

export default StatCard;
