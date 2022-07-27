import React from "react";
import { Link, useNavigate } from "react-router-dom";
const AuthButtons = () => {
  
  return (
    <>
      {" "}
      <Link
        to="/login"
        className="text-primary mr-8 min-w-max" 
      >
        Sign In
      </Link>
      <Link
        to="/register" 
        className="text-white bg-primary px-4 font-medium py-2  md:px-8 capitalize rounded-lg"
      >
        Register
      </Link>
    </>
  );
};

export default AuthButtons;
