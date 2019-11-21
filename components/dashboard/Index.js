//use this blank tempate to create new component
import React, { Component } from "react";
import ChartCard from "./ChartCard";
import StatCard from "./StatCard";

class Index extends Component {
  state = {};
  componentDidMount() {}
  render() {
    let Data = {
      StatCard: [
        { icon: "weekend", title: "Bookings", value: 184, color: "warning" },
        {
          icon: "equalizer",
          title: "Website Visits",
          value: 10,
          color: "rose"
        },
        { icon: "store", title: "djkqshqds", value: 11, color: "success" },
        { icon: "people", title: "shjdgqksjd", value: 12, color: "info" }
      ],
      ChartCard: [
        { chart: "websiteViewsChart", color: "warning" },
        { chart: "dailySalesChart", color: "success" },
        { chart: "completedTasksChart", color: "info" }
      ]
    };

    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {Data.ChartCard.map((item, index) => (
              <ChartCard key={index} data={item} />
            ))}
          </div>
          <div className="row">
            {Data.StatCard.map((item, index) => (
              <StatCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
