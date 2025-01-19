import React, { act } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const User = () => {
  const { user, dispatch, logout, isAuthenticated } = useAuth();

  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="absolute top-2 left-[900px] bg-black bg-opacity-65 backdrop-blur rounded-lg z-50 px-4 py-2 flex items-center gap-2">
      <img className="w-10 h-10 rounded-full" src={user.avatar} />
      <h1>Welcome, {user.username}</h1>
      <button
        onClick={handleLogout}
        className="text-xs bg-neutral-800 rounded px-2 py-1 font-semibold"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default User;
