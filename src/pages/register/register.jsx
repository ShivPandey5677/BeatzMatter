import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const handleChange=e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
 const handleClick=async e=>{
  e.preventDefault();

  try{
    await axios.post("http://localhost:8800/api/auth/register",inputs)
  }catch(err){
    setErr(err.response.data);
  }
 }
  return (
    <div className="h-screen bg-purple-300 flex items-center justify-center">
  <div className="w-1/2 flex flex-row-reverse bg-white rounded-2xl overflow-hidden min-h-96">
    <div className="flex-1  bg-[url('https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center p-10 flex flex-col gap-10 text-white">
      <h1 className="text-[100px] leading-[100px]">Buckety Social.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
        alias totam numquam ipsa exercitationem dignissimos, error nam,
        consequatur.
      </p>
      <span>Do you have an account?</span>
      <Link to="/login">
        <button className="w-1/2 p-2 border-none bg-white text-purple-600 font-bold cursor-pointer">
          Login
        </button>
      </Link>
    </div>
    <div className="flex-1 p-10 flex flex-col gap-10 justify-center text-gray-700">
      <h1 className="text-3xl text-gray-800">Register</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          className="border-none border-b-2 border-lightgray p-2"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          className="border-none border-b-2 border-lightgray p-2"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          className="border-none border-b-2 border-lightgray p-2"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          className="border-none border-b-2 border-lightgray p-2"
        />
        <button
          onClick={handleClick}
          className="w-1/2 p-2 border-none bg-purple-600 text-white font-bold cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</div>

  )
}

export default Register
