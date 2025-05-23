import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/APPRouter";
import { AuthProvider } from "./contexts/AuthProvider";
import AppPromiseLoader from "./AppPromiseLoader"; // Import the loader

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2500));
      } finally {
        setIsAppLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (isAppLoading) return <AppPromiseLoader />;

  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
