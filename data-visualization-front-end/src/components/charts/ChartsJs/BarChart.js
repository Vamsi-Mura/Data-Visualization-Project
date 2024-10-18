import { Bar } from "react-chartjs-2";
import { prepareChartData } from "../../../helper.js/chartHelper";

const BarChart = ({data, itemKey}) => {
  console.log(itemKey,'data');
    const chartData = prepareChartData(data, itemKey);
  
    return <Bar data={chartData} />;
  };
  
export default BarChart;