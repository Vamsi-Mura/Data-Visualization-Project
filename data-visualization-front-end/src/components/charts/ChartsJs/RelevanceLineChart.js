import { Line } from "react-chartjs-2";
import { prepareYearlyRelevanceData } from "../../../helper.js/chartHelper";

  const RelevanceLineChart = ({data}) => {
    const chartData = prepareYearlyRelevanceData(data);
  
    return <Line data={chartData} />;
  };
  
export default RelevanceLineChart