import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Assuming you have a route named "/AddProduct" for adding a product
  const addProductHandler = () => {
    // Add logic here if needed before redirecting
  };

  return (
    <div className="flex flex-1 w-full bg-light">
      <div className="home-container w-full">
        <img
          src="/assets/images/_4fdadfe4-ea0a-4d7e-8335-d59039a6a0b0.jpeg"
          alt="Landscape Image"
          className="w-full h-[80vh] border-black border-4"
        />
        <div className="flex space-x-20">
          {/* Use Link component for navigation */}
          <Link to="/AddProduct">
            <button
              className="bg-transparent hover:text-white px-4 py-2 bg-purple-500 hover:bg-purple-700 rounded transition duration-300 ease-in-out"
              onClick={addProductHandler}
            >
              ADD PRODUCT
            </button>
          </Link>
          <button className="bg-transparent hover:text-white px-4 py-2 bg-purple-500 hover:bg-purple-700 rounded transition duration-300 ease-in-out">
            CHECK AUTHENTICITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
