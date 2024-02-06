import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { sidebarLinks } from '../../constants';
import { Button } from '@mui/base';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
   const {currentUser}=useContext(AuthContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Your logout logic here
  };
 console.log(currentUser)
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          className="leftsidebar"
          style={{ backgroundColor: 'rgb(199, 191, 208)' }} 
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-11">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <Link to="/" className="flex gap-3 items-center">
                <img className="rounded-full" src="/assets/images/fotor-ai-20240205155222.jpg" alt="" width={170} height={36} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <Link to={`/profile/${currentUser.id}`} className="flex gap-3 items-center">
                <img src="/assets/images/profile-placeholder.svg" alt="profile" className="h-14 w-14 rounded-full" />
                <div className="flex flex-col">
                  <p className="body-bold text-white">{currentUser.name}</p>
                  <p className="text-light-3 text-sm">{currentUser.username}</p>
                </div>
              </Link>
            </motion.div>

            <ul className="flex flex-col gap-6">
              {sidebarLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  className={`leftsidebar-link group ${pathname === link.route && 'bg-dark'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <NavLink to={link.route} className="flex gap-4 items-center p-4 hover:text-white">
                    <img
                      src={link.imgURL}
                      alt={link.label}
                      className={`group-hover:invert-black ${pathname === link.route && 'invert-black'}`}
                    />
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }}>
            <Button onClick={handleLogout} className='shad-button_ghost pt-10 pl-4 mt-auto'>
              <img src="/assets/images/logout.svg" alt="Logout" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeftBar;
