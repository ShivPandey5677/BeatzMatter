import React, { useContext, useEffect, useState } from 'react'
import CatalogueList from '../components/catalougeList/catalougeList'
import { makeRequest } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { motion,useAnimation } from 'framer-motion';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';

const Explore = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
  const [searchTerm, setSearchTerm] = useState('');
  const {currentUser}=useContext(AuthContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      controls.start({ opacity: 1, translateY: 0, transition: { duration: 0.3 } });
    }, 250);

    return () => clearTimeout(timeout);
  }, [controls]);

  const { isLoading, error, data } = useQuery(
    {
      queryKey: ["products"],
      queryFn: () => makeRequest.get("/product").then((res) => {
        return res.data;
      })
    }
  )
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  const filteredData = data.filter((product) => {
    const name = product.name || ''; // Use empty string if name is undefined
    const location = product.location || ''; // Use empty string if location is undefined
    return (
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase())
    );})

 
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
          <Link to={`/profile/${currentUser.id}`}>
          <img
            src="/assets/images/profile-placeholder.svg" // Add path to your profile picture
            alt="Profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            whileHover={{ scale: 1.2 }}
          />
          </Link>
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
            <div>
    { data.map((product)=>{
  return <CatalogueList product={product} key={product.id}/>
    }) 
   }  
    </div> 
          </>
        )}
      </main>
      <footer className="py-4 px-8 bg-gray-900 text-center">
        <motion.div
          className="text-blue-400 underline text-lg"
          whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
        >
          Explore All
        </motion.div>
      </footer>
   </div>
  )
}

export default Explore
