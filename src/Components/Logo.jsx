import React from "react";
import logo from "../assets/logo5.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-3">
        <img src={logo} className="w-10" />
        <p className="text-2xl font-semibold">WorldWise</p>
      </div>
    </Link>
  );
};

export default Logo;
