// src/components/ui/ErrorMessage.tsx
import React from "react";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = "" }) => {
  return (
    <div className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 ${className}`}>
      <p className="font-medium">Error:</p>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;