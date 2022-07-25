import React, { useState } from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Link } from "react-router-dom";
import SharedAuth from "../../Components/Shared/SharedAuth";
import { BsFillEyeSlashFill , BsFillEyeFill} from "react-icons/bs";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [displayPassword, setDisplayPassword]  = useState(false)
  return (
    <section className="container mx-auto flex justify-center min-h-screen items-center">
      <BasicBlock>
        <h2 className="text-2xl pr-4 mb-4 min-w-">Sign In into Coin.io</h2>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            name=""
            id=""
            className="input block w-full mb-4 bg-neutral"
          />
          <div className="flex items-center justify-between  w-full   mb-4">
            {" "}
            <input
              type={displayPassword? 'text':'password'}
              placeholder="Choose a password"
              name=""
              id=""
              className="input w-full bg-neutral"
            />
            <button className="text-xl py-4   " onClick={e => {
              e.preventDefault();
              setDisplayPassword(!displayPassword)
            }}>
              {displayPassword ? (<BsFillEyeFill />) : (<BsFillEyeSlashFill />)}
            </button>{" "}
          </div>
          <input
            type="email"
            placeholder="Confirm Password"
            name=""
            id=""
            className="input bg-neutral w-full mb-4"
          />
          <div className="my-4  text-right w-full">
            <Link to="#" className="font-light text-primary  text-right">
              Forgot Password?
            </Link>
          </div>
          <button className="w-full btn btn-primary capitalize">Sign In</button>
          <p className="text-center py-4">
            If you don't have account, you can{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </p>
        </form>
        <SharedAuth />
      </BasicBlock>
    </section>
  );
};

export default Register;
