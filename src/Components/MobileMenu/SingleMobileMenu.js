import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
const SingleMobileMenu = (props) => {
  const { name, to, icon } = props; 
  return (
    <Link
      to={to}
      className="flex justify-between items-center text-xl p-4 opacity-50 hover:text-primary hover:opacity-100"
    >
      <div className="flex items-center text-sm gap-2 font-light">
        {" "}
        <span className="text-2xl text-white">{icon}</span> {name}
      </div>
      <span> 
        <BiChevronRight />
      </span>
    </Link>
  );
};

export default SingleMobileMenu;
