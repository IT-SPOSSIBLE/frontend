import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../index.css";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Messages from "../components/Messages";
import Listings from "../components/Listings";
import Inquiries from "../components/Inquires";
import SaleBike from "../components/SaleBike";
const PannelAdmin = () => {
  const [active_page, setActivePage] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderSection = () => {
    switch (active_page) {
      case "Dashboard":
        return <Dashboard />;
      case "SaleBike":
        return <SaleBike />;
      case "Listings":
        return <Listings />;
      case "Inquiries":
        return <Inquiries />;
      case "Messages":
        return <Messages />;
      case "Analytics":
        return <Dashboard />;
      case "Logout":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };
  return (
    <div className="flex">
      <Sidebar
        onSelectPage={(page) => {
          setActivePage(page);
          setIsSidebarOpen(false);
        }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <div>{renderSection()}</div>
      </div>
    </div>
  );
};

export default PannelAdmin;
