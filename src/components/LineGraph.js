import React, { useState, useEffect } from "react";
import "../styling/LineGraph.css";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default class LineGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="graph">
        <>
          <h1>Graph</h1>
          <ResponsiveContainer width="100%" aspect={2}>
            <LineChart data={this.props.entries} margin={{ right: 60, top: 5 }}>
              <CartesianGrid />
              <XAxis dataKey="day" interval={"preserveStartEnd"} />
              <YAxis></YAxis>
              <Legend />
              <Tooltip />
              <Line dataKey="hours" stroke="black" activeDot={{ r: 9 }} />
            </LineChart>
          </ResponsiveContainer>
        </>
      </div>
    );
  }
}
