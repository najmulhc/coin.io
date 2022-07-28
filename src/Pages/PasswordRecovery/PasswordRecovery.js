import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth } from "../../firebase.init";
import { useState } from "react";
const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
 
  const resetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="min-h-screen min-w-screen bg-base-100 flex justify-center items-center">
   <div className="container mx-auto p-4">   <BasicBlock>
        <div className=" ">
          <h2 className="text-2xl pr-4 mb-4 ">Password Recovery</h2>
          <p className="text-white mb-12 mt-4 text-sm opacity-80">
            Enter your email to recover your password
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="input  bg-neutral block w-full"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className="w-full btn btn-primary capitalize mt-4"
            onClick={resetPassword}
          >
            Send Recovery email
          </button>
        </div>
      </BasicBlock></div>
    </section>
  );
};

export default PasswordRecovery;
