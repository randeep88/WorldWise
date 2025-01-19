import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Navbar from "../Components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("Randeep");
  const [password, setPassword] = useState("123");

  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
      login(username, password);
    }
  };

  useEffect(()=>{
    if(isAuthenticated){
      navigate("/app", {replace: true});
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="m-auto mt-40 text-gray-300 bg-[#333333] rounded-lg p-5 w-96 h-72 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-3">LOGIN</h1>
      <form onClick={handleSubmit} className="w-80" action="">
        <div className="flex flex-col mb-3 gap-1">
          <label htmlFor="username">Username</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="bg-gray-300 focus:outline-none rounded px-2 py-1 text-black"
            id="username"
            type="text"
            placeholder="Enter username"
          />
        </div>
        <div className="flex flex-col mb-5 gap-1">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-gray-300 focus:outline-none rounded px-2 py-1 text-black"
            id="password"
            type="text"
            placeholder="Enter password"
          />
        </div>
        <button
          onClick={login}
          className="rounded hover:bg-yellow-600 bg-yellow-500 text-black px-3 py-1 font-semibold w-full"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
