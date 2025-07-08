import React from "react";
import {Loader} from "lucide-react";
// import Loader from "./components/ui/Loader";

interface AppPromiseLoaderProps {
  message?: string;
}

const AppPromiseLoader: React.FC<AppPromiseLoaderProps> = ({ message = "Please Wait" }) => {
  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-indigo-200 via-white to-indigo-100 flex flex-col items-center justify-center backdrop-blur-md rounded-md">
      <div className="text-4xl text-primary opacity-55 text-center mb-4">
        {message}
      </div>
      <div className="text-3xl text-primary">
        <Loader />
      </div>
    </div>
  );
};

export default AppPromiseLoader;
