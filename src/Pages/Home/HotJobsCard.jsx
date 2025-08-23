import React from "react";
import { BiBriefcase } from "react-icons/bi";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    company,
    company_logo,
    location,
    title,
    jobType,
    applicationDeadline,
    description,
    requirements,
    salaryRange,
  } = job;
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="flex items-center gap-1">
        <figure>
          <img src={company_logo} alt={company} className="w-14 m-1" />
        </figure>
        <div>
          <h4 className="text-2xl font-bold">{company}</h4>
          <p className="flex items-center gap-1 text-gray-400 text-sm">
            <SlLocationPin></SlLocationPin>
            {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex items-center gap-1">
          <p className="flex items-center gap-1 text-gray-400 text-sm">
            <BiBriefcase></BiBriefcase>
            {jobType}
          </p>
          <p className="flex items-center gap-1 text-gray-400 text-sm">
            <IoMdTime></IoMdTime>
            {applicationDeadline}
          </p>
        </div>
        <p className="my-3">{description}</p>
        <div className="card-actions">
          {requirements.map((requirement,index) => (
            <Link key={index} className="bg-blue-50 py-1 px-3 text-xs text-gray-600">
              {requirement}
            </Link>
          ))}
        </div>
        <div className="flex items-center mt-3">
          <p className=" text-gray-500">
            <span className="font-semibold">Salary :</span>
            <span className="ml-1 font-bold text-blue-500">
              ${salaryRange.min}
            </span>
            /month -{" "}
            <span className=" font-bold text-blue-500">${salaryRange.max}</span>
            /month
          </p>
          <Link
            to={`/jobs/${_id}`}
            className="btn btn-soft btn-primary  hover:btn-primary "
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
