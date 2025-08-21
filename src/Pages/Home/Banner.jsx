import React from "react";
import { motion } from "motion/react";
import happyMoments from "../../assets/Team/team1.jpg";
import teamWork from "../../assets/Team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="hidden lg:inline-block lg:flex-1">
          <motion.img
            animate={{ y: [80, 140, 80] }}
            transition={{ duration: 5, repeat: Infinity }}
            src={happyMoments}
            className="max-w-sm  rounded-t-[30px] rounded-br-[30px] border-l-6 border-b-6 border-blue-500 shadow-2xl"
          />
          <motion.img
            animate={{ x: [150, 200, 150] }}
            transition={{ duration: 5, delay: 3, repeat: Infinity }}
            src={teamWork}
            className="max-w-sm rounded-t-[30px] rounded-br-[30px] border-l-6 border-b-6 border-blue-500 shadow-2xl"
          />
        </div>
        <motion.div
          animate={{ y: [100, 0] }}
          transition={{ duration: 0.8 }}
          className="lg:flex-1"
        >
          <h1 className="text-6xl font-bold">
            The{" "}
            <motion.span animate={{ color: ["#2510e6",'#a432d9',"#16ba2c",'#f73d0a',"#2510e6"] }}transition={{duration:3,repeat:Infinity}}>
              Easiest Way
            </motion.span>{" "}
            to Get Your New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="btn btn-primary hover:bg-blue-950">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
