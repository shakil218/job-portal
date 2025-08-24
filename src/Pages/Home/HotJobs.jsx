import React, { useContext, useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";
import AuthContext from "../../Context/AuthContext";
import Spinner from "../Shared/Spinner";


const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const {loading} =useContext(AuthContext)

  useEffect(() => {
    fetch(`http://localhost:5000/jobs`)
      .then((res) => res.json())
      .then((data) => {
        if(loading){
          return <Spinner></Spinner>
        }else{
          setJobs(data);
        }
      });
  }, [loading]);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-5">
        {
          jobs.map(job =><HotJobsCard key={job._id} job={job}></HotJobsCard>)
        }
      </div>
    </div>
  );
};

export default HotJobs;
