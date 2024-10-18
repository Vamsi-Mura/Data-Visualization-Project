import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { aggregateByKey } from '../../../helper.js/chartHelper';
// import { aggregateByKey } from './helpers';

const BarChart = ({allData, itemKey, name}) => {
  const data = aggregateByKey(allData, itemKey);

  const chartData = {
    series: [
      {
        name: name,
        data: Object.values(data),
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      xaxis: {
        categories: Object.keys(data),
        title: { text: name },
      },
      yaxis: {
        title: { text: 'Count' },
      },
      tooltip: { enabled: true },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
