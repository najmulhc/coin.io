import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/logo.svg";
const Header = () => {
  const currencies = [
    'aed', 'ars', 'aud', 'bch', 'bdt', 'bhd',
    'bmd', 'bnb', 'brl', 'btc', 'cad', 'chf',
    'clp', 'cny', 'czk', 'dkk', 'dot', 'eos',
    'eth', 'eur', 'gbp', 'hkd', 'huf', 'idr',
    'ils', 'inr', 'jpy', 'krw', 'kwd', 'lkr',
    'ltc', 'mmk', 'mxn', 'myr', 'ngn', 'nok',
    'nzd', 'php', 'pkr', 'pln', 'rub', 'sar',
    'sek', 'sgd', 'thb', 'try', 'twd', 'uah',
    'usd', 'vef', 'vnd', 'xag', 'xau', 'xdr',
    'xlm', 'xrp', 'yfi', 'zar', 'bits', 'link',
    'sats'
  ];
  return (
    <header>
      <div className="container px-4 md:px-0 mx-auto py-4 flex justify-between items-center">
        <img src={Logo} width={150} alt="" />
        <nav>
          <ul className="  items-center gap-4 hidden md:flex">
            <li><Link to="#">Market</Link></li>
            <li><Link to="#">Watchlist</Link></li>
            <li><Link to="#">PortFolio</Link></li>
            <li><Link to="#">Learn</Link></li>
          </ul>
        </nav>
        <div className="flex items-center hidd">
          <select name="" id="" className="w-21 bg-base-100 text-white opacity-50 mr-12 font-semibold" onChange={e => console.log(e.target.value)}>
            {
              currencies.map(currency => <option value={currency} key={currency}>{ currency.toUpperCase()}</option>)
            }
          </select>
          <Link className="text-primary mr-4" to="#">Sign In</Link>
          <button className="btn btn-primary px-8 capitalize">Register</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
