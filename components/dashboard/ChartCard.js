import React, { Component } from "react";

//use this blank tempate to create new component
//import styles from './DashedBox.css';

class ChartCard extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div className="col-md-4">
        <div className="card card-chart">
          <div
            className={"card-header card-header-"+this.props.data.color}
            data-header-animation="true"
          >
            <div className="ct-chart" id={this.props.data.chart}></div>
          </div>
          <div className="card-body">
            <div className="card-actions">
              <button
                type="button"
                className="btn btn-danger btn-link fix-broken-card"
              >
                <i className="material-icons">build</i> Fix Header!
              </button>
              <button
                type="button"
                className="btn btn-info btn-link"
                rel="tooltip"
                data-placement="bottom"
                title="Refresh"
              >
                <i className="material-icons">refresh</i>
              </button>
              <button
                type="button"
                className="btn btn-default btn-link"
                rel="tooltip"
                data-placement="bottom"
                title="Change Date"
              >
                <i className="material-icons">edit</i>
              </button>
            </div>
            <h4 className="card-title">Website Views</h4>
            <p className="card-category">Last Campaign Performance</p>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">access_time</i> campaign sent 2 days
              ago
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartCard;
