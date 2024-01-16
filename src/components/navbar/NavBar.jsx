import React from 'react'
import {Link} from "react-router-dom"
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
const NavBar = () => {
  return (
    <section className="topbar">
        <div className="flex-between py-4 px-5">
            <Link to="/" className="flex gap-3 items-center">
               <img src="\assets\images\logo.png" alt="logo" width={130} height={325}/>
            </Link>
            <div className="flex gap-4">
            <IconButton color="primary" aria-label="LogOut" className="shad-button_ghost">
                <LogoutIcon/>
            </IconButton>
            </div>
        </div>

    </section>
  )
}

export default NavBar
