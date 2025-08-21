import React from "react";
import logo from "../../assets/fav-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr className="text-gray-200"/>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src={logo} alt="" />
          <p>
            Job Portal Ltd.
            <br />
            Providing reliable jobs since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr className="text-gray-200"/>
      <footer className="footer sm:footer-horizontal bg-base-200 items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - Job Portal All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <Link className="hover:text-blue-500">
            Privacy Policy
          </Link>
          <Link className="hover:text-blue-500">
            Terms & Conditions
          </Link>
          <Link className="hover:text-blue-500">
            Security
          </Link>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
