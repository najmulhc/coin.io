import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
const AuthButtons = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      navigate("/login")
    })
  }
  console.log(user)
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
      <div className="flex items-center gap-2" onClick={logOut}>
        <img className="w-12 h-12 rounded-full border-2 border-white " src={user.photoURL} alt="" />  
        <h2 className="text-primary">{user.email}</h2>
      </div>
    )
  }
};

export default AuthButtons;
