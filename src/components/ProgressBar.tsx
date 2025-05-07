import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full h-1 bg-gray-200 relative overflow-hidden">
      <div
        className="h-full bg-primary transition-all duration-300 ease-in-out "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
