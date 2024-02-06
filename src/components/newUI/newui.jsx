import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const NewUI = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();
 
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
      controls.start({ opacity: 1, translateY: 0, transition: { duration: 0.3 } });
    }, ); // Simulating a 3-second loading time, adjust as needed

    return () => clearTimeout(timeout);
  }, [controls]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-700 to-indigo-800 text-white">
      <main className="flex flex-col items-center justify-center gap-8 p-4 md:gap-12 md:p-6">
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
            WELCOME
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: 'easeInOut' }}
          >
            TO
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.2, ease: 'easeInOut' }}
          >
            CATALYST
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.3, ease: 'easeInOut' }}
          >
            SCORING
          </motion.span>{' '}
          <motion.span
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.2, delay: 0.4, ease: 'easeInOut' }}
          >
            APP
          </motion.span>
        </motion.h1>
        <p className="max-w-[auto] text-gray-300 text-lg md:text-xl dark:text-gray-400">
          We provide the best catalogue management services in the industry.
        </p>
        <motion.img
          src="https://www.contentwise.com/cw-media/2022/05/Grafico-Performance-KPIs2-01-832x435.png"
          alt="Catalog Dummy"
          className="w-full h-[390px] object-cover rounded-md shadow-lg mt-8 opacity-100 bg-transparent"
          initial={{ opacity: 0, translateY: 50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </main>
      {isLoaded && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col gap-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Link to="/AddProduct">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-800 text-white hover:bg-purple-700 px-8 py-4 rounded-full transition duration-300 ease-in-out"
              >
                ADD CATALOGUE
              </motion.button>
            </Link>

            <Link to="/CheckAuthenticity">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-800 text-white hover:bg-purple-700 px-8 py-4 rounded-full transition duration-300 ease-in-out"
              >
                CHECK CATALOGUE
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default NewUI;
