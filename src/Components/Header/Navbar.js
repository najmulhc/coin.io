import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
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
  )
}

export default Navbar