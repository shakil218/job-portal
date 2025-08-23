import Lottie from "lottie-react";
import React from "react";
import spinner from "../../assets/Lottie/loading.json";

const Spinner = () => {
  return (
    <div className="text-center">
      <Lottie animationData={spinner}></Lottie>
    </div>
  );
};

export default Spinner;
