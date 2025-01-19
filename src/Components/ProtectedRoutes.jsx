import React, { useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAuthenticated){
        navigate("/")
    }
  })

  return isAuthenticated ? children : null;
};

export default ProtectedRoutes;
