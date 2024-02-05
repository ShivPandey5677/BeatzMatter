import React, { useState, useEffect } from 'react';

const CircularProgressBar = ({ percentage }) => {
  const [offset, setOffset] = useState(0);

  // Calculate the dash array based on the percentage
  const dashArray = 440;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  // Update offset on mount and when the percentage changes
  useEffect(() => {
    setOffset(dashOffset);
  }, [dashOffset]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-36 h-36">
        {/* Circular track */}
        <svg className="absolute" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="2"
          />
        </svg>

        {/* Circular progress bar */}
        <svg className="absolute" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke="#4caf50"
            strokeWidth="2"
            strokeDasharray={dashArray}
            strokeDashoffset={offset}
            transition="stroke-dashoffset 0.8s ease-in-out"
          />
        </svg>

        {/* Percentage text */}
        <div className="absolute flex items-center justify-center w-36 h-36 text-2xl font-bold text-gray-800">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const initialPercentage = 60;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <CircularProgressBar percentage={initialPercentage} />
    </div>
  );
};

export default App;
