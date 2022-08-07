import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Link, useNavigate } from "react-router-dom";
import SharedAuth from "../../Components/Shared/SharedAuth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useState, useEffect } from "react";
import Container from "../../Components/Shared/Container";
import AuthHeading from "../../Components/Shared/AuthHeading";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user?.user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <Container className="flex justify-center min-h-screen items-center p-4">
 
        {" "}
        <BasicBlock className="max-w-sm">
    
            {" "}
            <AuthHeading>Sign In into Coin.io</AuthHeading>
            <form onSubmit={login}>
              <input
                type="email"
                placeholder="Enter email"
                className="input bg-base-100 block w-full"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Enter password"
                className="input bg-base-100  w-full mt-4"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <div className="my-4 text-right">
                <Link
                  to="/recover-password"
                  className="font-light text-primary text-right"
                >
                  Forgot Password?
                </Link>
              </div>
              {email && password ? (
                <button className="w-full btn btn-primary capitalize">
                  Sign In
                </button>
              ) : (
                <button className="w-full btn btn-disabled capitalize" disabled>
                  Sign In
                </button>
              )}
              <p className="text-center py-4">
                If you don't have account, you can{" "}
                <Link to="/register" className="text-primary">
                  Register
                </Link>
              </p>
            </form>
            <SharedAuth />
        </BasicBlock>
    </Container>
  );
};

export default Login;
