import React from 'react'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../Posts";
const Profile = () => {
  return (
    <div className="">
  
    <div className="w-full h-[300px] relative ">
      <img src="https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover"/>
      <img src="/assets/images/background.png" alt="" className="w-[200px] h-[200px] rounded-[50%] object-cover absolute left-0 right-0 m-auto top-[200px]"/>
    </div>
    <div className='px-[20px] py-[70px] md:p-[20px] sm:p-[10px]'>
      <div className="h-[180px] shadow-lg rounded-lg bg-[white] text-[#000] p-[50px] flex items-center justify-between mb-[20px] md:flex-col md:h-30vh md:p-[20px] md:mt-[100px]">
        <div className="flex-1 gap-[10px] sm:flex-wrap">
          <a href="http://facebook.com" className="text-[#555]">
        <FacebookTwoToneIcon fontSize="large"/>
          </a>
          <a href="http://instagram.com" className="text-[#555]">
            <InstagramIcon fontSize="large"/>
          </a>
            <a href="" className="text-[#555]">
              <TwitterIcon fontSize="large"/>
            </a>
            <a href="" className="text-[#555]">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="" className="text-[#555]">
              <PinterestIcon fontSize="large"/>
            </a>
        </div>
        <div className="flex flex-1 flex-col items-center gap-[10px]">
          <span className="text-[30px] font-[500]">John Doe</span>
          <div className="w-full flex flex-1 items-center justify-around">
            <div className="flex items-center gap-[5px] text-[#555]">
              <PlaceIcon/>
              <span className="text-[12px]">City</span>
            </div>
            <div className="flex items-center gap-[5px] text-[#555]">
              <LanguageIcon/>
              <span className="text-[12px]">website.com</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-[10px]">
                <EmailOutlinedIcon />
                <MoreVertIcon />
        </div>
      </div>
      <Posts/>
    </div>

    </div>
   
  )
}

export default Profile
