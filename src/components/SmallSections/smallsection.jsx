import React from 'react';

const SmallDiv = () => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="large-text mr-4">
            Large Text
          </div>
          <div className="dummy-icon text-gray-500 text-4xl">
            {/* Assuming you want a larger icon */}
            <img src="/assets/images/people.svg" alt="icon" className="w-12 h-12" />
          </div>
        </div>
      </div>
      <div className="small-text mt-4">
        Small Text Below Large Text
      </div>
      <div className="dummy-image mt-4 w-8 h-8">
        {/* Moving the image below the small text */}
        <img src="/assets/images/profile-placeholder.svg" alt="profile" className="h-14 w-14 rounded-full mx-auto" />
      </div>
    </div>
  );
};

export default SmallDiv;
