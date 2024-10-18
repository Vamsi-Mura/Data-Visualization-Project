import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = ({data}) => {
//   const data = [
//     { start_year: 2017, relevance: 10 },
//     { start_year: 2018, relevance: 15 },
//     { start_year: 2019, relevance: 25 },
//     { start_year: 2020, relevance: 18 },
//   ]; // Replace this with dynamic JSON parsing.

  const chartData = {
    series: [
      {
        name: 'Relevance',
        data: data.map((item) => item.relevance),
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      xaxis: {
        categories: data.map((item) => item.start_year),
        title: { text: 'Year' },
      },
      yaxis: {
        title: { text: 'Relevance' },
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
