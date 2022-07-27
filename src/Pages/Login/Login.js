import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Link } from "react-router-dom";
import SharedAuth from "../../Components/Shared/SharedAuth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const register = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    console.log(user.user);
  }
  if (error) {
    console.log(error.message);
  }
  return (
    <section className="container mx-auto flex justify-center min-h-screen items-center">
      <BasicBlock>
        <div className="min-w-[400px]">
          {" "}
          <h2 className="text-2xl pr-4 mb-4 ">Sign In into Coin.io</h2>
          <form onSubmit={register}>
            <input
              type="email"
              placeholder="Enter email"
              className="input  bg-neutral block w-full"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Enter password"
              className="input bg-neutral  w-full mt-4"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="my-4 text-right w-full">
              <Link to="#" className="font-light text-primary  text-right">
                Forgot Password?
              </Link>
            </div>
            <button className="w-full btn btn-primary capitalize" type="submit">
              Sign In
            </button>
            <p className="text-center py-4">
              If you don't have account, you can{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </form>
          <SharedAuth />{" "}
        </div>
      </BasicBlock>
    </section>
  );
};

export default Login;
