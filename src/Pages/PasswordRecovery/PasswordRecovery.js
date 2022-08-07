import React from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.init";
import { useState } from "react";
import AuthHeading from "../../Components/Shared/AuthHeading";
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
    <section className="w-screen h-screen flex justify-center items-center">
      {" "}
      <BasicBlock className="w-sm">
        <AuthHeading>Password Recovery</AuthHeading>
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
      </BasicBlock>
    </section>
  );
};

export default PasswordRecovery;
