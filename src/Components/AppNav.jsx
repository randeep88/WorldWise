import React from "react";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div className="flex justify-center h-8 rounded-lg bg-[#333333]">
        <NavLink to='cities' className={({isActive})=>isActive? "bg-neutral-900 py-1 px-4 rounded-lg transition-all" : "bg-[#333333] py-1 px-4 rounded-lg transition-all"}>Cities</NavLink>
        <NavLink to='countries' className={({isActive})=>isActive? "bg-neutral-900 py-1 px-4 rounded-lg transition-all" : "bg-[#333333] py-1 px-4 rounded-lg transition-all"}>Countries</NavLink>
    </div>
  );
};

export default AppNav;
