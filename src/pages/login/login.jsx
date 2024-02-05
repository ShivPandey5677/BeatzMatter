import { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext.jsx";

const Login  = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // const [err, setErr] = useState(null);
  // const navigate=useNavigate();
  // const handleChange=(e)=>{
  //   setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  // }
  // const {login}=useContext(AuthContext);
  // const handleLogin=async (e)=>{
  //   e.preventDefault()
  //   try{
  //   const res=await login(inputs);
  //   navigate("/")
  //   }catch(err){
  //     if (err.response && err.response.data && err.response.data.message) {
  //       setErr(err.response.data.message);
  //     } else {
  //       setErr("An unexpected error occurred.");
  //     }
  //   }
  //   // login();
  // }
  return (
    <div className=" flex items-center justify-center h-lvh bg-[rgb(193,190,255)]">
      <div className="w-1/2 flex bg-light-1 rounded-[10px] min-h-[600px] overflow-hidden">
        <div className="flex-1  bg-[url('https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-center bg-cover flex flex-col gap-[30px] text-white p-2">
          <h1 className="text-[100px] leading-[100px]">Buckety Login.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="text-[14px]">Don't you have an account?</span>
          <Link to="/register">
            <button className="w-1/2 p-[10px] border-none bg-light-1 text-[#663399] font-bold cursor-pointer">Register</button>
          </Link>
        </div>
        <div className="flex-1 p-10 flex flex-col gap-10 justify-center">
          <h1 className="text-[#555] font-semibold text-[20px]">Login</h1>
          <form className="flex flex-col gap=[30px]">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="border-none border-b border-lightGray p-5"
              // onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border-none border-b border-lightGray p-5"
              // onChange={handleChange}
            />
  
            <button className="w-1/2 p-2 border-none bg-purple-600 text-white font-bold cursor-pointer mt-4">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
        }

export default Login
