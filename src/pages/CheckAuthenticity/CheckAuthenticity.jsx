// src/App.js

import SmallDiv from "../../components/SmallSections/smallsection";

const CheckAuthenticity = () => {
  return (
    <div className="flex flex-col">
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
     
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-purple-400 text-black"
        />
        <button
          className="ml-2 bg-black text-light-1 px-4 py-2 rounded-md"
          onClick={() => console.log(`Search for: `)}
        >
          Search
        </button>
      </div>

      
      <div className="flex items-center">
     
        <img
          src="https://placekitten.com/40/40"  
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        
        
    
        <div className="text-sm font-semibold">Binary Bosses</div>
      </div>
    </header>
    <div className="flex mt-4">
        <SmallDiv/>
        <SmallDiv/>
        <SmallDiv/>
        <SmallDiv/>
    </div>
</div>
  );
};

export default CheckAuthenticity;