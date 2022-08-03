import React from "react";
import { Link } from "react-router-dom";

const ProfileNav = ({ to, children, icon }) => {
  return (
    <Link
      to={to}
      className="  w-full p-4 my-4 rounded-md flex items-center gap-4 text-md hover:bg-base-100 hover:text-primary font-light"
    >
      {" "}
      <span className="text-2xl ">{icon}</span>{" "}
      <span className="opacity-60">{children}</span>
    </Link>
  );
};

export default ProfileNav;
