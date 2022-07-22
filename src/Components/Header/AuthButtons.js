import React from 'react'
import { Link } from 'react-router-dom'
const AuthButtons = () => {
  return (
    <> <Link className="text-primary mr-8 min-w-max" to="/login">
    Sign In
  </Link>
  <Link to='/register' className="text-white bg-primary px-4 font-medium py-2  md:px-8 capitalize rounded-lg">
    Register
  </Link></>
  )
}

export default AuthButtons