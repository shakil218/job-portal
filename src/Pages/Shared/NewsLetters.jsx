import React from "react";
import newsLetterLeft from "../../assets/newsletter-image/newsletter-left.png";
import newsLetterRight from "../../assets/newsletter-image/newsletter-right.png";
import { MdEmail, MdOutlineVerified } from "react-icons/md";

const NewsLetters = () => {
  return (
    <div className="flex h-[450px] bg-cover bg-no-repeat bg-center rounded-2xl my-10 bg-blue-600">
      <div className="flex justify-center items-center w-3/12">
        <img src={newsLetterLeft} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center text-center mx-5 gap-10 w-6/12">
        <h3 className="text-5xl font-semibold text-white">
          New Things Will Always Update Regularly
        </h3>
        <div className="flex justify-between bg-white rounded-lg w-full">
          <div className="flex m-2 p-2 gap-3 bg-white rounded-lg w-full ">
            <div className="flex flex-1 items-center gap-3">
              <MdEmail size={40} className="text-gray-500"></MdEmail>
              <input
                type="email"
                name=""
                placeholder="Enter your email here"
                id=""
                className="input w-full border-none"
              />
            </div>
            <button className="btn btn-primary hover:bg-blue-950">
              <MdOutlineVerified></MdOutlineVerified>Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-3/12">
        <img src={newsLetterRight} alt="" />
      </div>
    </div>
  );
};

export default NewsLetters;
