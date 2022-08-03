 
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link  } from "react-router-dom";
import { auth } from "../../firebase.init";
import { createImageFromInitials } from "../../Utils/ProfileImg";
const AuthButtons = () => {
  const [user] = useAuthState(auth);  
  if (!user) {
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
  } else {
    return (
      <Link to="/profile" className="flex items-center gap-4 min-w-[200px] "  >
        <img className="w-12 h-12 rounded-full  " src={createImageFromInitials(100, user.email)} alt="" />  
        <p className="text-primary min-w-full">{user?.displayName || "User"}</p>
      </Link>
    )
  }
};

export default AuthButtons;
