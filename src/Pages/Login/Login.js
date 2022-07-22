import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Link } from "react-router-dom";
import SharedAuth from "../../Components/Shared/SharedAuth";
const Login = () => {
  return (
    <section className="container mx-auto flex justify-center min-h-screen items-center">
      <BasicBlock>
        <h2 className="text-2xl pr-4 mb-4 ">Sign In into Coin.io</h2>
        <form>
          <input
            type="email"
            placeholder="Enter email"
            class="input  bg-neutral  w-full"
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            class="input bg-neutral  w-full mt-4"
            required
          />
          <div className="my-4 text-right w-full">
          
            <Link to="#" className="font-light text-primary  text-right">Forgot Password?</Link>
          </div>
          <button className="w-full btn btn-primary capitalize">Sign In</button>
          <p className="text-center py-4">If you don't have account, you can <Link to='/register' className="text-primary">Register</Link></p>
        </form>
        <SharedAuth /> 
      </BasicBlock>
    </section>
  );
};

export default Login;
