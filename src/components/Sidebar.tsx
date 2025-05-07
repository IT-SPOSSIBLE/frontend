
import {
  MdDirectionsBike,
  MdList,
  MdHelpOutline,
  MdMessage,
  MdLogout,
  MdAnalytics,
  MdDashboard,
} from "react-icons/md";

import NavItem from "./NavItem";
const Sidebar = () => {
  return (
    <div className="bg-side text-side-text h-screen w-16 md:w-64 px-4 fixed border-r-2 border-secondary dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl text-secondary font-bold hidden md:block mt-4 text-center italic">IT IS possible</h2>
      <ul className="flex flex-col mt-5 text-xl">
        <NavItem icon={<MdDashboard className="text-xl" />} label="Dashboard" />
        <NavItem
          icon={<MdDirectionsBike className="text-xl" />}
          label="Sell a Bike"
        />
        <NavItem icon={<MdList className="text-xl" />} label="My Listings" />
        <NavItem
          icon={<MdHelpOutline className="text-xl" />}
          label="Inquiries"
        />
        <NavItem icon={<MdMessage className="text-xl" />} label="Messages" />
        <NavItem icon={<MdAnalytics className="text-xl" />} label="Analytics" />
        <NavItem icon={<MdLogout className="text-xl" />} label="Logout" />
      </ul>
    </div>
  );
};

export default Sidebar;
