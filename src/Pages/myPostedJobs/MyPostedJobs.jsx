import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/jobs?email=${user?.email}`)
      .then((res) => setJobs(res.data));
  }, [user?.email, axiosSecure]);

  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">
        My posted{" "}
        <motion.span
          animate={{
            color: ["#2510e6", "#a432d9", "#16ba2c", "#f73d0a", "#2510e6"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          jobs
        </motion.span>
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Application Deadline</th>
              <th>Application Count</th>
              <th>Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
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
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <th>
                  <Link to={`/view-applications/${job._id}`}>
                    <button className="btn btn-ghost btn-xs">
                      View Applications
                    </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
