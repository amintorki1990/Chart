import SimpleLineChart from "../components/SimpleLineChart";
import SimpleBarChart from "../components/SimpleBarChart";
import SimplePieChart from "../components/SimplePieChart";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Dashboard = () => {
  const charts = useSelector((state) => state["chart"].types);
  return (
    <div className="flex flex-wrap p-12 items-center justify-center">
      {charts.map((chart) => {
        if (chart === "bar chart") return <SimpleBarChart key={nanoid()} />;
        if (chart === "pie chart") return <SimplePieChart key={nanoid()} />;
        if (chart === "line chart") return <SimpleLineChart key={nanoid()} />;
      })}
    </div>
  );
};

export default Dashboard;
