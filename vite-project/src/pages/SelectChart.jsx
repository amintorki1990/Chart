import { barChart, pieChart, lineChart } from "../assets/images";
import ChartCard from "../components/ChartCard";

const SelectChart = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-6">
      <h2 className="font-ubuntu text-xl text-gray-600">
        Select Your Chart Type:
      </h2>
        <div className="flex flex-wrap items-center justify-center">
            <ChartCard img={barChart} name='bar chart' />
            <ChartCard img={pieChart} name='pie chart' />
            <ChartCard img={lineChart} name='line chart' />
        </div>
    </div>
  );
};

export default SelectChart;
