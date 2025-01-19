import React from "react";
import Navbar from "../Components/Navbar";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Homepage = () => {

  const navigate = useNavigate()

  const {isAuthenticated} = useAuth()

  const handleTracking = () => {
    if(isAuthenticated){
      navigate("app")
      
    }else{
      navigate("login")
    }
  }

  return (
    <div className="text-white bg-image w-full h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-96 w-[1000px] mt-14 text-center m-auto ">
        <h1 className="text-5xl font-semibold mb-2">You travel the world.</h1>
        <h1 className="text-5xl font-semibold mb-5">
          WorldWise keeps track your adventures.
        </h1>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful expriences, and show your friend how
          you have wandered the world
        </p>

        <button onClick={handleTracking} className="hover:bg-yellow-600 transition-all bg-yellow-500 rounded-md px-5 py-2 text-black text-sm font-semibold mt-7">
          START TRACKING NOW
        </button>
      </div>
    </div>
  );
};

export default Homepage;
