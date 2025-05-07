import React from "react";
import {
  MdDirectionsBike,
  MdList,
  MdHelpOutline,
  MdMessage,
  MdAnalytics,
  MdDashboard,
} from "react-icons/md";
import Card from "./Card";

import { barChartData, lineChartData } from "../assets/ChardData";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);
const cardData = [
  { icon: MdDirectionsBike, title: "Total Listings", value: "140" },
  { icon: MdList, title: "Available Bikes", value: "7" },
  { icon: MdHelpOutline, title: "Sold Bikes", value: "3" },
  { icon: MdMessage, title: "Inquiries", value: "10" },
  { icon: MdAnalytics, title: "Support Requests", value: "5" },
  { icon: MdDashboard, title: "Dashboard Access", value: "200" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="grow p-8 ">
      <h2 className="text-2xl mt-4">Dashboard</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={<card.icon />}
            title={card.title}
            value={card.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-side rounded-md shadow-md p-4 dark:bg-gray-800">
          <h2 className="text-lg font-semibold mt-4">Monthly Sales Data</h2>
          <Line data={lineChartData} />
        </div>
        <div className="bg-side rounded-md shadow-md p-4 dark:bg-gray-800">
          <h2 className="text-lg font-semibold mt-4">Monthly Sales Data</h2>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
