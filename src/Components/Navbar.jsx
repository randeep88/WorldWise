import React from "react";
import logo from "../assets/logo.png";
import Logo from "./Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, dispatch } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="text-white  py-4 flex items-center justify-around">
      <Logo />
      <ul className="flex items-center gap-10">
        <li className=" text-sm">
          <NavLink className="text-sm hover:text-yellow-500 transition-all font-semibold">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink className="text-sm hover:text-yellow-500 transition-all font-semibold">
            PRICING
          </NavLink>
        </li>
        {!isAuthenticated && (
          <button
            onClick={() => navigate("login")}
            className="hover:bg-yellow-600 transition-all bg-yellow-500 font-semibold text-black rounded-md px-3 py-1"
          >
            LOGIN
          </button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
