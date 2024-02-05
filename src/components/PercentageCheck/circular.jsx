import React, { useEffect, useState } from "react";

const Circular = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-warning">
          <div className="text-white">{value}%</div>
        </div>
        <div
          className="absolute inset-0 bg-white rounded-full"
          style={{ clipPath: `polygon(${value}% 0, 100% 0, 100% 100%, ${value}% 100%)` }}
        ></div>
      </div>
    </div>
  );
};

export default Circular;
