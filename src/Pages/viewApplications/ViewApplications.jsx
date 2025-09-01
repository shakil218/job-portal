import React from "react";
import { motion } from "motion/react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleApplicationStatusUpdate = (event, id) => {
    // console.log(event.target.value,id);
    const data = {
      status: event.target.value
    }
    fetch(`http://localhost:5000/job-applications/${id}`,{
      method:"PATCH",
      headers:{
        "content-type":'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.modifiedCount) {
                Swal.fire({
                  title: "Good job!",
                  text: "Your application status updated successfully!",
                  icon: "success",
                });
                
              }
    })
  };

  return (
    <div className="my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">
        Applications for this{" "}
        <motion.span
          animate={{
            color: ["#2510e6", "#a432d9", "#16ba2c", "#f73d0a", "#2510e6"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Job
        </motion.span>
      </h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job ID</th>
              <th>Applicant Email</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.application_id}</td>
                <td>{application.applicant_email}</td>
                <td>
                  <select
                    onChange={(event) =>
                      handleApplicationStatusUpdate(event, application._id)
                    }
                    defaultValue={application.status || "Change Status"}
                    className="select select-xs"
                  >
                    <option disabled={true}>Change Status</option>
                    <option>On hold</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
