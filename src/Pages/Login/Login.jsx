import Lottie from "lottie-react";
import React, { useContext } from "react";
import LoginAnimationLoginData from "../../assets/Lottie/Secure Login.json";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left ">
          <Lottie animationData={LoginAnimationLoginData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <p className="text-blue-500 text-center mt-5">Welcome back!</p>
          <h1 className="text-4xl font-bold text-center">Member Login</h1>
          <p className="text-center text-gray-500">
            Access to all features. No credit card required.
          </p>
          <form onSubmit={handleSignIn} className="card-body">
            <fieldset className="fieldset">
              <SocialLogin></SocialLogin>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div className="flex justify-between items-center mr-4">
                <label className="label">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Agree our terms & policy
                </label>
                <Link className="link link-hover">Forgot Password</Link>
              </div>
              <button className="btn bg-blue-950 text-white mt-4">Login</button>
            </fieldset>
            <p className="text-center">
              Don't have an account?{" "}
              <Link to={"/register"} className="hover:text-blue-500">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
