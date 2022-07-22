import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="  items-center gap-8  hidden md:flex">
      <li className="hover:text-primary ">
              <Link to="/market">Market</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="/watchlist">Watchlist</Link>
            </li>
            <li className="hover:text-primary ">
              <Link to="/portfolio">Portfolio</Link>
            </li>
           
            <li className="hover:text-primary ">
              <Link to="/learn">Learn</Link>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar