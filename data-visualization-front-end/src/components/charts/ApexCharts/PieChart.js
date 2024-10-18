import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { aggregateByKey } from '../../../helper.js/chartHelper';
// import { aggregateByKey } from './helpers';

const PieChart = ({allData, itemKey}) => {
  const data = aggregateByKey(allData, itemKey);

  const chartData = {
    series: Object.values(data),
    options: {
      chart: {
        type: 'pie',
      },
      labels: Object.keys(data),
      tooltip: { enabled: true },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="pie" height={350} />
    </div>
  );
};

export default PieChart;
