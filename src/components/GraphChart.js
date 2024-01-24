import React from "react";
import ApexCharts from "react-apexcharts";

function GraphChart({ data }) {
  const transformedData = data.map(({ year, revenue }) => ({
    x: new Date(year, 0, 1),
    y: revenue,
  }));

  const series = [
    {
      name: "Revenue",
      color: "#4caf50",
      data: transformedData,
      // data: [
      //   { x: new Date(2022, 0, 1), y: 10000 }, // January 2022, $10,000
      //   { x: new Date(2022, 1, 1), y: 12000 }, // February 2022, $12,000
      //   { x: new Date(2022, 2, 1), y: 14000 }, // March 2022, $14,000
      //   { x: new Date(2022, 3, 1), y: 15500 }, // April 2022, $15,500
      //   { x: new Date(2022, 4, 1), y: 16000 }, // May 2022, $16,000
      //   { x: new Date(2022, 5, 1), y: 17000 }, // June 2022, $17,000
      //   { x: new Date(2022, 6, 1), y: 18500 }, // July 2022, $18,500
      //   { x: new Date(2022, 7, 1), y: 19000 }, // August 2022, $19,000
      //   { x: new Date(2022, 8, 1), y: 20000 }, // September 2022, $20,000
      //   { x: new Date(2022, 9, 1), y: 19500 }, // October 2022, $19,500 (slight dip)
      //   { x: new Date(2022, 10, 1), y: 21000 }, // November 2022, $21,000
      //   { x: new Date(2022, 11, 1), y: 22000 }, // December 2022, $22,000
      //   { x: new Date(2023, 0, 1), y: 23000 }, // January 2023, $23,000
      //   { x: new Date(2023, 1, 1), y: 24000 }, // February 2023, $24,000
      //   { x: new Date(2023, 2, 1), y: 24500 }, // March 2023, $24,500
      //   { x: new Date(2023, 3, 1), y: 25000 }, // April 2023, $25,000
      //   { x: new Date(2023, 4, 1), y: 26000 }, // May 2023, $26,000
      //   { x: new Date(2023, 5, 1), y: 27000 }, // June 2023, $27,000
      //   { x: new Date(2023, 6, 1), y: 27500 }, // July 2023, $27,500
      //   { x: new Date(2023, 7, 1), y: 28000 }, // August 2023, $28,000
      //   { x: new Date(2023, 8, 1), y: 28500 }, // September 2023, $28,500
      //   { x: new Date(2023, 9, 1), y: 27000 }, // October 2023, $27,000 (dip)
      // ],
    },
  ];
  //   Options config
  const options = {
    chart: {
      type: "area", // Use 'area' for a filled chart
      height: 350,
      zoom: {
        //   enabled: true, // Enable zooming
        type: "x", // Zoom only along the x-axis (time axis)
        autoScaleYaxis: true, // Automatically adjust the y-axis scaling during zoom
      },
      toolbar: {
        show: false,
        //   autoSelected: "zoom", // Show zoom tool by default
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels for a cleaner look
    },
    stroke: {
      curve: "smooth", // Smoothen the line
      width: 3,
    },
    series: series,
    xaxis: {
      type: "datetime", // Specify x-axis as datetime for time-series data
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
  };
  return (
    <div>
      <ApexCharts options={options} series={series} type="area" height={350} />
    </div>
  );
}

export default GraphChart;
