import React from "react";
import { motion } from "motion/react";
import happyMoments from "../../assets/banner/banner1.png";
import teamWork from "../../assets/banner/banner2.png";
import iconTopBanner from "../../assets/banner/icon-top-banner.png";
import iconBottomBanner from "../../assets/banner/icon-bottom-banner.png";

const Banner = () => {
  return (
    <div className="hero bg-base-200 lg:h-[600px]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden lg:inline-block lg:flex-1">
          <div className="flex gap-3">
            <motion.img
              animate={{ y: [70, 120, 70] }}
              transition={{ duration: 5, repeat: Infinity }}
              src={happyMoments}
              className="max-w-sm shadow-2xl rounded-tl-[50px] rounded-br-[60px]"
            />
            <motion.img
              animate={{ y: [120, 150, 120] }}
              transition={{ duration: 3, repeat: Infinity }}
              src={iconTopBanner}
              className="w-[95px] h-[88px] relative right-35"
            />
          </div>
          <div className="flex">
            <motion.img
              animate={{ x: [150, 200, 150], y:[0] }}
              transition={{ duration: 5, delay: 2, repeat: Infinity }}
              src={teamWork}
              className="max-w-sm shadow-2xl rounded-br-[60px]"
            />
            <motion.img
              animate={{ y: [90, 120, 90],x:[120] }}
              transition={{ duration: 3, repeat: Infinity }}
              src={iconBottomBanner}
              className="w-[95px] h-[46px] relative right-[420px]"
            />
          </div>
        </div>
        <motion.div
          animate={{ y: [100, 0] }}
          transition={{ duration: 0.8 }}
          className="lg:flex-1"
        >
          <h1 className="text-6xl font-bold">
            The{" "}
            <motion.span
              animate={{
                color: ["#2510e6", "#a432d9", "#16ba2c", "#f73d0a", "#2510e6"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Easiest Way
            </motion.span>{" "}
            to Get Your New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary hover:bg-blue-950">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
