import React from "react";
import {  Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import { routes } from "./routes";

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>
      </Routes>
  );
};

export default AppRouter;
