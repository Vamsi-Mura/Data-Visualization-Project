import { Pie } from "react-chartjs-2";
import { prepareChartData } from "../../../helper.js/chartHelper";

const PieChart = ({data, itemKey}) => {
    const chartData = prepareChartData(data, itemKey);
  
    return <Pie data={chartData} />;
  };
  
  export default PieChart