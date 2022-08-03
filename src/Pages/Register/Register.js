import React, { useEffect, useState } from "react";
import BasicBlock from "../../Components/Shared/BasicBlock";
import { Link, useNavigate } from "react-router-dom";
import SharedAuth from "../../Components/Shared/SharedAuth";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { createImageFromInitials } from "../../Utils/ProfileImg";
import { BsCheck2Circle } from "react-icons/bs";
const Register = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [updateProfile] = useUpdateProfile(auth);
  const [password, setPasssword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");
  const [displayPassword, setDisplayPassword] = useState(false);
  const [displayConfirmPassword, setDisplayConfirmPasseord] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const imgUrl = createImageFromInitials(100, email);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };
  const updateImg = async () => {
    await updateProfile({ photoURL: imgUrl });
 navigate("/");
  };
  useEffect(() => {
    if (user) {
      console.log(user.user);
      updateImg();
    }
  }, [user]);
  if (error) {
    console.log(error.message);
  }
  return (
    <section className="container mx-auto flex justify-center min-h-screen items-center">
      <div className="p-4">
        <BasicBlock>
          <div className=" ">
            {" "}
            <h2 className="text-2xl pr-4 mb-4 min-w-">Create an account</h2>
            <form onSubmit={register}>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name=""
                  onChange={(e) => setEmail(e.target.value)}
                  id=""
                  className="input block w-full mb-4 bg-base-100"
                  required
                />
              </div>
              <div className="input bg-base-100   focus-within:border-2 focus-within:border-gray-500 flex items-center justify-between  w-full   mb-4 ">
                {" "}
                <input
                  type={displayPassword ? "text" : "password"}
                  placeholder="Choose a Password"
                  name=""
                  id=""
                  className="bg-base-100 outline-none"
                  onChange={(e) => {
                    setPasssword(e.target.value);
                  }}
                />
                <button
                  className="text-xl py-4   "
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplayPassword(!displayPassword);
                  }}
                >
                  {displayPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                </button>{" "}
              </div>
              <div className="input bg-base-100   focus-within:border-2 focus-within:border-gray-500 flex items-center justify-between  w-full   mb-4 ">
                {" "}
                <input
                  type={displayConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name=""
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  id=""
                  className=" w-full outline-none bg-base-100"
                />
                <button
                  className="text-xl py-4   "
                  onClick={(e) => {
                    e.preventDefault();
                    setDisplayConfirmPasseord(!displayConfirmPassword);
                  }}
                >
                  {displayConfirmPassword ? (
                    <BsFillEyeFill />
                  ) : (
                    <BsFillEyeSlashFill />
                  )}
                </button>{" "}
              </div>

              <div className="my-4 w-full flex items-center gap-2">
                <BsCheck2Circle className="text-primary " />
                <p className="text-white">
                  By Register, I agree that I'm 18 years of age or older, to the{" "}
                  <Link to="#" className="text-primary">
                    User <br /> Agreement, Privacy Policy, Cookie Policy
                  </Link>
                </p>
              </div>
              {password === confrimPassword && password !== "" ? (
                <button className="w-full btn btn-primary capitalize">
                  Sign In
                </button>
              ) : (
                <button
                  className="w-full btn   capitalize btn-disabled"
                  disabled
                >
                  Register
                </button>
              )}
              <p className="text-center py-4">
                Already Have an account?{" "}
                <Link to="/login" className="text-primary">
                  Login now
                </Link>
              </p>
            </form>
            <SharedAuth />
          </div>
        </BasicBlock>
      </div>
    </section>
  );
};

export default Register;
