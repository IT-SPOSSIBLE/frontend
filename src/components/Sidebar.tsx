import {
  MdDirectionsBike,
  MdList,
  MdHelpOutline,
  MdMessage,
  MdLogout,
  MdDashboard,
} from "react-icons/md";

import NavItem from "./NavItem";
type SidebarProps = {
  onSelectPage: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onSelectPage, isOpen, onClose }) => {
  return (
    <div className="bg-side text-side-text h-screen w-16 md:w-64 px-4 fixed border-r-2 border-secondary dark:bg-gray-900 dark:text-white">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <h2 className="text-2xl text-secondary font-bold hidden md:block mt-4 text-center italic">
        IT IS possible
      </h2>
      <ul className="flex flex-col mt-5 text-xl">
        <NavItem
          icon={<MdDashboard className="text-xl" />}
          label="Dashboard"
          onClick={() => onSelectPage("Dashboard")}
        />
        <NavItem
          icon={<MdDirectionsBike className="text-xl" />}
          label="Sell a Bike"
          onClick={() => onSelectPage("SaleBike")}
        />
        <NavItem
          icon={<MdList className="text-xl" />}
          label="My Listings"
          onClick={() => onSelectPage("Listings")}
        />
        <NavItem
          icon={<MdHelpOutline className="text-xl" />}
          label="Inquiries"
          onClick={() => onSelectPage("Inquiries")}
        />
        <NavItem
          icon={<MdMessage className="text-xl" />}
          label="Messages"
          onClick={() => onSelectPage("Messages")}
        />
        <NavItem icon={<MdLogout className="text-xl" />} label="Logout" />
      </ul>
    </div>
  );
};

export default Sidebar;
