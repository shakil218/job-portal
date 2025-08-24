import Lottie from "lottie-react";
import React from "react";
import spinner from "../../assets/Lottie/Material wave loading.json";

const Spinner = () => {
  return (
    <div className="flex justify-center">
      <Lottie animationData={spinner}></Lottie>
    </div>
  );
};

export default Spinner;
