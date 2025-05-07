import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
const MobileHeaderNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="block md:hidden bg-secondary p-4 text-center fixed left-0 z-50 w-full bg-gradient-to-tr from-blue-400 to-black items-center border-b-1 border-primary">
      <div className="flex justify-between items-center">
        <div className="ms-8 flex flex-row items-center">
          <div className="bg-white border-2 border-primary h-16 w-16 rounded-full flex items-center justify-center text-center ">
            <span className="text-2xl text-primary italic font-extrabold">IT IS</span>
          </div>
          <span className="ms-2">
            <span className="text-2xl text-primary ms-1 italic font-extrabold">POSSIBLE</span>
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary focus:outline-none"
        >
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div  className="animate-slide-in-x">
          <nav className="mt-2">
            <ul className="flex flex-col space-y-2">
              {routes
                .filter((route) => route.fornav)
                .map((route) => (
                  <li key={route.name}>
                    <NavLink
                      to={route.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary  transition duration-300 ease-in-out hover:animate-pulse-white  whitespace-nowrap   hover:text-white  font-medium rounded-lg  hover:bg-primary  text-xs sm:text-sm px-2 py-2 text-center"
                          : "text-white hover:text-white transition duration-300 ease-in-out hover:animate-pulse-white hover:bg-primary whitespace-nowrap focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center"
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileHeaderNavigation;
