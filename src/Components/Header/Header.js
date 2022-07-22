import React from "react";
import Logo from "../../Assets/Images/logo.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import { displayMenu } from "../../Feature/menuSlice";
import Navbar from "./Navbar";
import CurrencySelector from "./CurrencySelector";
import AuthButtons from "./AuthButtons";
const Header = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.value);

  return (
    <header className="bg-neutral md:bg-base-100 sticky md:static top-0 z-50 ">
      <div className="container px-4 mx-auto py-4 flex justify-between items-center">
        <img src={Logo} className="w-20 md:w-28" alt="" />
        <Navbar />
        <div className="md:flex items-center hidden">
          <CurrencySelector />
          <AuthButtons />
        </div>

        {menu ? (
          <div className="md:hidden flex gap-2">
            <BiX
              className="text-3xl block md:hidden hover:text-primary"
              onClick={() => dispatch(displayMenu(false))}
            />
          </div>
        ) : (
          <div className="md:hidden flex gap-2">
            <HiOutlineMenuAlt3
              className="text-3xl block md:hidden hover:text-primary"
              onClick={() => dispatch(displayMenu(true))}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
