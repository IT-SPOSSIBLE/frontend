import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import HeaderNavigation from "../components/navbar/HeaderNavigation";
import MobileHeaderNavigation from "../components/navbar/MobileHeaderNavigation";

const RootLayout: React.FC = () => {

  const location=useLocation()
  console.log("Current path:", location.pathname);

  const hideHeaderAndFooter=location.pathname.startsWith('/pannel')
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-hidden">
     {
      !hideHeaderAndFooter && (
        <header>
        <HeaderNavigation />
        <MobileHeaderNavigation />
      </header>
      )
     }
      <div className="flex-grow bg-gray-300">
        <Outlet />
      </div>
     {
      !hideHeaderAndFooter&& (
        <footer className="w-full bg-thirdy  text-center py-4">
        <p className="text-sm text-primary">
          © 2025 hotCode. All rights reserved.
        </p>
      </footer>
      )
     }
    </div>
  );
};

export default RootLayout;
