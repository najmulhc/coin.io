import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.svg";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setCurrency } from "../../Feature/currencySlice";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiX } from "react-icons/bi";
import { displayMenu } from "../../Feature/menuSlice";
const Header = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu.value);
  const currencies = [
    "aed",
    "ars",
    "aud",
    "bch",
    "bdt",
    "bhd",
    "bmd",
    "bnb",
    "brl",
    "btc",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "dot",
    "eos",
    "eth",
    "eur",
    "gbp",
    "hkd",
    "huf",
    "idr",
    "ils",
    "inr",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "ltc",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "usd",
    "vef",
    "vnd",
    "xag",
    "xau",
    "xdr",
    "xlm",
    "xrp",
    "yfi",
    "zar",
    "bits",
    "link",
    "sats",
  ];
  return (
    <header className="bg-neutral md:bg-opacity-0">
      <div className="container px-4 md:px-0 mx-auto py-4 flex justify-between items-center">
        <img src={Logo} className='w-28 md:w-40' alt="" />
        <nav className="hidden md:block">
          <ul className="  items-center gap-8  hidden md:flex">
            <li className="hover:text-primary ">
              <Link to="#">Watchlist</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="#">Portfolio</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="#">Market</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="#">Learn</Link>
            </li>
          </ul>
        </nav>
        <div className="md:flex items-center hidden">
          <select
            name=""
            id=""
            className="w-21 bg-base-100 text-white opacity-50 mr-12 font-semibold"
            onChange={(e) => dispatch(setCurrency(e.target.value))}
          >
            {currencies.map((currency) => (
              <option value={currency} key={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
          <Link className="text-primary mr-4" to="#">
            Sign In
          </Link>
          <button className="text-white bg-primary px-4 font-medium py-2 md:py-4  md:px-8 capitalize rounded-lg">
            Register
          </button>
        </div>

        {menu ? (
          <BiX
            className="text-3xl block md:hidden hover:text-primary"
            onClick={() => dispatch(displayMenu(false))}
          />
        ) : (
          <HiOutlineMenuAlt3
            className="text-3xl block md:hidden hover:text-primary"
            onClick={() => dispatch(displayMenu(true))}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
