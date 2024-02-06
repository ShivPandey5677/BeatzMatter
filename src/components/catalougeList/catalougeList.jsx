import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const CatalogueList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCatalogue, setFilteredCatalogue] = useState([]);
  const catalogueData = [
    {
      id: 1,
      name: 'Furniture',
      location: 'Mumbai, India',
      rating: 8.5,
      sellerEmail: 'seller1@gmail.com',
      link: '/catalogue/1',
      imageSrc: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'fridge',
      location: 'Delhi, India',
      rating: 9.0,
      sellerEmail: 'seller2@gmail.com',
      link: '/catalogue/2',
      imageSrc: 'https://images.pexels.com/photos/3230214/pexels-photo-3230214.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'bicycle',
      location: 'Noida, India',
      rating: 5.2,
      sellerEmail: 'seller3@gmail.com',
      link: '/catalogue/3',
      imageSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
    },
    {
      id: 4,
      name: 'note book',
      location: 'Bangalore, India',
      rating: 6.2,
      sellerEmail: 'seller4@gmail.com',
      link: '/catalogue/4',
      imageSrc: 'https://images.pexels.com/photos/616849/pexels-photo-616849.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
    },
    {
      id: 5,
      name: 'utensils',
      location: 'Bangalore, India',
      rating: 3.2,
      sellerEmail: 'seller5@gmail.com',
      link: '/catalogue/5',
      imageSrc: 'https://images.pexels.com/photos/3379322/pexels-photo-3379322.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
    },
    {
      id: 6,
      name: 'electronics',
      location: 'Bangalore, India',
      rating: 7.2,
      sellerEmail: 'seller6@gmail.com',
      link: '/catalogue/6',
      imageSrc: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      controls.start({ opacity: 1, translateY: 0, transition: { duration: 0.3 } });
    }, 250);

    return () => clearTimeout(timeout);
  }, [controls]);

  useEffect(() => {
    const filtered = catalogueData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCatalogue(filtered);
  }, [searchTerm]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 to-indigo-800 text-white">
      <header className="py-4 px-8 bg-gray-900 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold">Catalogue List</h1>
          <input
            type="text"
            placeholder="Search..."
            className="py-1 px-2 border border-gray-500 rounded text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="relative">
          <img
            src="https://via.placeholder.com/50" 
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
          />
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-8 p-4 md:gap-12 md:p-6">
        {isLoaded && (
          <>
            <motion.h1
              initial={{ opacity: 0, translateY: 50 }}
              animate={controls}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-center"
            >
              <motion.span
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                CATALOGUE
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2, delay: 0.1, ease: 'easeInOut' }}
              >
                LIST
              </motion.span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
              {filteredCatalogue.map((catalogue) => (
                <motion.div
                  key={catalogue.id}
                  className={`bg-gray-800 rounded-md p-4 shadow-lg flex flex-col items-center ${
                    catalogue.id % 2 === 0 ? 'md:col-span-2 lg:col-span-1' : 'lg:col-span-2 xl:col-span-1'
                  }`}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <img
                    src={catalogue.imageSrc}
                    alt={`Catalogue ${catalogue.id}`}
                    className="w-full h-32 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{catalogue.name}</h3>
                  <div className="flex items-center mb-2">
                    <div
                      className={`bg-${catalogue.rating >= 6 ? 'green' : 'red'}-500 w-6 h-6 rounded-full flex items-center justify-center mr-2`}
                    >
                      <span className="text-white font-bold">{catalogue.rating}</span>
                    </div>
                    <motion.div
                      className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 360, transition: { duration: 0.5, ease: 'easeInOut' } }}
                    >
                      {catalogue.rating >= 6 ? (
                        <span className="text-white">&#10003;</span>
                      ) : (
                        <span className="text-white">&#10007;</span>
                      )}
                    </motion.div>
                  </div>
                  <div className="text-gray-400 text-sm mb-2">Seller: {catalogue.sellerEmail}</div>
                  <Link to={`/catalogue/${catalogue.id}`} className="text-blue-400 underline">
                    View Details
                  </Link>
                  <Link to={`/catalogue/${catalogue.id}/more-info`} className="text-gray-400 text-sm underline mt-2">
                    Show More Info
                  </Link>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </main>
      <footer className="py-4 px-8 bg-gray-900 text-center">
        <Link to="/explore-all" className="text-blue-400 underline text-lg">
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
          >
            Explore All
          </motion.div>
        </Link>
      </footer>
    </div>
  );
};

export default CatalogueList;
