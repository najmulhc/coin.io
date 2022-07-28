import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Link, useNavigate } from "react-router-dom";
import SharedAuth from "../../Components/Shared/SharedAuth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useState, useEffect } from "react";
const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate= useNavigate()
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  useEffect(() => {
    if (user?.user) {
       navigate("/")
     }
  }, [user,navigate])
  return (
    <section className="container mx-auto flex justify-center min-h-screen items-center">
      <BasicBlock>
        <div className="min-w-[400px]">
          {" "}
          <h2 className="text-2xl pr-4 mb-4 ">Sign In into Coin.io</h2>
          <form  onSubmit={login}>
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
              onChange={e => {setPassword(e.target.value)}}
              required
               
            />
            <div className="my-4 text-right w-full">
              <Link to="/" className="font-light text-primary  text-right">
                Forgot Password?
              </Link>
            </div>
           {email && password ? ( <button className="w-full btn btn-primary capitalize"  >
              Sign In
            </button>): ( <button className="w-full btn btn-disabled capitalize" disabled >
              Sign In
            </button>)}
            <p className="text-center py-4">
              If you don't have account, you can{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </p>
          </form>
           <SharedAuth  /> 
        </div>
      </BasicBlock>
    </section>
  );
};

export default Login;
