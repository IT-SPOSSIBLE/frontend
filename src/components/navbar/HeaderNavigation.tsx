import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../routes/routes";
import { motion } from "framer-motion";
import { AuthContext } from "../../contexts/AuthProvider";

const HeaderNavigation: React.FC = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  if (!auth) return null;

const handleLogout = async () => {
  if (auth?.logout) {
    await auth.logout();
    navigate("/login");
  }
};



  return (
    <div>
      <div className="hidden md:grid grid-cols-5 fixed left-0 z-50 w-full gap-4 h-16 bg-secondary justify-center items-center border-b-1 border-primary overflow-hidden">
        {/* Left Logo */}
        <div className="col-span-1 flex justify-center items-center text-center">
          <div className="flex flex-row items-center">
            <div className="ms-10 bg-white h-14 w-14 border-2 border-primary rounded-full flex items-center justify-center text-center">
              <span className="text-xl text-primary italic font-extrabold">IT IS</span>
            </div>
            <span className="ms-2">
              <span className="text-xl text-primary ms-1 italic font-extrabold">POSSIBLE</span>
            </span>
          </div>
        </div>

        {/* Navigation + Auth Buttons */}
        <div className="col-span-4 flex justify-end items-center me-6 space-x-4">
          {auth.accessToken && auth.email && (
            <span className="text-primary font-semibold text-2xl">
              Welcome, {auth.email}
            </span>
          )}

          <nav>
            <ul className="flex items-center space-x-1 text-xl">
              {routes
                .filter((route) =>
                  !auth.accessToken
                    ? route.isPublic && route.fornav
                    : route.fornav && route.name !== "Ingia" && route.name !== "Jisajili"
                )
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
                            ? "text-primary transition duration-300 ease-in-out hover:animate-pulse-white whitespace-nowrap hover:text-white font-medium rounded-lg hover:bg-primary  px-2 py-2 text-center"
                            : "text-white hover:text-white transition duration-300 ease-in-out hover:animate-pulse-white hover:bg-primary whitespace-nowrap focus:outline-none font-medium rounded-lg px-4 py-2 text-center"
                        }
                      >
                        {route.name}
                      </NavLink>
                    </motion.button>
                  </li>
                ))}
            </ul>
          </nav>

          {auth.accessToken && auth.email && (
            <button
              onClick={handleLogout}
              className="bg-primary text-white  px-4 py-2 rounded hover:bg-primary/80 ease-in-out hover:animate-pulse-white transition-300"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
