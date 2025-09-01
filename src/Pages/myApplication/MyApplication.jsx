import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { motion } from 'motion/react';

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  console.log(jobs);

  useEffect(() => {
    fetch(`http://localhost:5000/job-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">My <motion.span animate={{color:["#2510e6", "#a432d9", "#16ba2c", "#f73d0a", "#2510e6"]}} transition={{duration:3,repeat:Infinity}}>Applications</motion.span></h1>
      <div className="overflow-x-auto my-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Company</th>
              <th>Job</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt={job.company} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
