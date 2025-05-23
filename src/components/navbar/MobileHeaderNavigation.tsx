import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { MdMenu, MdClose } from "react-icons/md";
import { AuthContext } from "../../contexts/AuthProvider";

const MobileHeaderNavigation: React.FC = () => {
  const auth = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!auth) return null;

  const handleLogout = async () => {
    if (auth.logout) {
      await auth.logout();
      setIsOpen(false);
    }
  };

  return (
    <div className="block md:hidden bg-secondary p-4 text-center fixed left-0 z-50 w-full border-b border-primary">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="ms-8 flex items-center">
          <div className="bg-white border-2 border-primary h-14 w-14 rounded-full flex items-center justify-center">
            <span className="text-2xl text-primary italic font-extrabold">IT IS</span>
          </div>
          <span className="ms-2 text-2xl text-primary italic font-extrabold">POSSIBLE</span>
        </div>

        {/* Toggle Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-primary focus:outline-none me-4"
        >
          {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>

      {/* Dropdown Navigation */}
      {isOpen && (
        <div className="mt-2 animate-slide-in-x border-t-2 border-primary mt-4">
          {auth.accessToken && auth.email && (
            <p className="text-primary text-sm font-semibold mb-2 mt-6">
              Welcome, {auth.email}
            </p>
          )}

          <nav>
            <ul className="flex flex-col space-y-2">
              {routes
                .filter((route) => {
                  if (!auth.accessToken) {
                    return route.isPublic && route.fornav;
                  } else {
                    return (
                      route.fornav &&
                      route.name !== "Ingia" &&
                      route.name !== "Jisajili"
                    );
                  }
                })
                .map((route) => (
                  <li key={route.name}>
                    <NavLink
                      to={route.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary transition duration-300 ease-in-out hover:text-white font-medium rounded-lg hover:bg-primary text-xs sm:text-sm px-4 py-2 text-center"
                          : "text-white hover:text-white transition duration-300 ease-in-out hover:bg-primary font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center"
                      }
                    >
                      {route.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Logout Button */}
          {auth.accessToken && auth.email && (
            <button
              onClick={handleLogout}
             className="bg-primary text-white text-xs px-4 py-2 rounded hover:bg-primary/80 ease-in-out hover:animate-pulse-white transition-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderNavigation;
