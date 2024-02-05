import React, { useContext } from 'react'
import { Link,NavLink,useLocation } from 'react-router-dom'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { sidebarLinks } from '../../constants';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/base';
import { AuthContext } from '../../context/authContext';

const LeftBar = () => {
    const {pathname}=useLocation();
    //const {currentUser}=useContext(AuthContext);
  return (
   <nav className="leftsidebar">
    <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center ">
      <img className="rounded-full" src="/assets/images/fotor-ai-20240205155222.jpg" alt="" width={170} height={36}/>
            </Link>
            <Link to={`/profile/:id`} className="flex gap-3 items-center">
                <img src="/assets/images/profile-placeholder.svg" alt="profile" className="h-14 w-14 rounded-full"/>
                <div className="flex flex-col">
                <p className="body-bold">
                    John Doe
                </p>


                <p className="small-regular text-light-3">User Name</p>
            </div>
            </Link>
        
        <ul className="flex flex-col gap-6">
            {sidebarLinks.map((link)=>{
                const isActive= pathname===link.route
                return(
                    <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-dark'}`}><NavLink to={link.route} className="flex gap-4 items-center p-4">
                       <img src={link.imgURL} alt={link.label} className={`group-hover:invert-black ${isActive && 'invert-black'}`} /> {link.label}</NavLink></li>

                )
            })}
        </ul>
    </div>
   <Button className='shad-button_ghost pt-10 pl-4'>
 <img src="/assets/images/logout.svg" alt="logout" />
 <p className="small-medium lg:base-medium">Logout</p>
   </Button>
   </nav>
  )
}

export default LeftBar
