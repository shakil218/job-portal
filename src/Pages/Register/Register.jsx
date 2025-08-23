import React, { useContext } from "react";
import RegisterAnimationData from "../../assets/Lottie/register.json";
import Lottie from "lottie-react";
import AuthContext from "../../Context/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name,email,userName, password,confirmPassword);
    // const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div className="hero min-h-screen my-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left lg:w-[500px]">
          <Lottie animationData={RegisterAnimationData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center mt-5">Register now!</h1>
          <p className="text-center text-gray-500 mt-2">Access to all features. No credit card required.</p>
          {/* <SocialLogin></SocialLogin> */}
          <form onSubmit={handleSignUp} className="card-body">
            <fieldset className="fieldset">
              <SocialLogin></SocialLogin>
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Full Name"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">User-name</label>
              <input
                type="text"
                name="userName"
                className="input"
                placeholder="User-name"
                required
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />
              <label className="label">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="input"
                placeholder="Password"
                required
              />
              <div className="flex justify-between items-center mr-4">
                <label className="label">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Agree our terms & policy
                </label>
                <Link className="link link-hover">Learn more</Link>
              </div>
              <button className="btn bg-blue-950 text-white mt-4">Register</button>
            </fieldset>
            <p className="text-center">Already have an account? <Link to={'/sign-in'} className="hover:text-blue-500">Sign in</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
