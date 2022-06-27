import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useForm } from "react-hook-form";
import * as $ from "jquery";

function daysInThisWeek() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

const options = {
  scales: {
    yAxes: [
      {
        display: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
const [datasets, setDatasets] = useState({
  label: "Your Productivity",
  data: Array(daysInThisWeek()).fill(0),
  fill: false,
  backgroundColor: "rgb(60, 51, 92)",
  borderColor: "rgba(60, 51, 92, 0.3)",
});
const data = {
  labels: Array.from({ length: daysInThisWeek() }, (_, i) => i + 1),
  datasets: [datasets],
};
