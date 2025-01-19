import React from "react";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="transition-all text-gray-300 w-1/3 h-screen p-5 flex flex-col justify-between items-center">
      <Logo />

      <div className="flex flex-col items-center gap-5 -mt-5 h-[500px]">
        <AppNav />
        <Outlet />
      </div>

      <p className="text-sm text-gray-400">
        &copy; Copyright 2024 Worldwise Pvt. Ltd.
      </p>
    </div>
  );
};

export default Sidebar;
