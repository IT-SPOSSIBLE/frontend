import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { motion } from "framer-motion";
const HeaderNavigation: React.FC = () => {
  return (
    <div>
      <div className="hidden md:grid grid-cols-5 fixed left-0 z-50 w-full gap-4 h-16 bg-secondary justify-center items-center border-b-1 border-primary overflow-hidden">
        <div className="col-span-1 flex justify-center items-center text-center">
          <div className="flex flex-row items-center">
            <div className=" ms-10 bg-white h-14 w-14 border-2 border-primary rounded-full flex items-center justify-center text-center">
              <span className="text-2xl text-primary italic font-extrabold">IT IS</span>
            </div>
            <span className="ms-2">
              <span className="text-2xl text-primary ms-1 italic font-extrabold">POSSIBLE</span>
            </span>
          </div>
        </div>

        <div className="col-span-4 flex justify-end items-center me-6">
          <nav>
            <ul className="flex items-center space-x-1">
              {routes
                .filter((route) => route.fornav)
                .map((route) => (
                  <li key={route.name}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <NavLink
                        to={route.path}
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary  transition duration-300 ease-in-out hover:animate-pulse-white  whitespace-nowrap   hover:text-white  font-medium rounded-lg  hover:bg-primary  text-xs sm:text-sm px-2 py-2 text-center"
                            : "text-white hover:text-white transition duration-300 ease-in-out hover:animate-pulse-white hover:bg-primary whitespace-nowrap focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center"
                        }
                      >
                        {route.name}
                      </NavLink>
                    </motion.button>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
