import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { FaAward, FaRegUserCircle } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import {
  MdOutlineLocationOn,
  MdOutlineUpdate,
  MdOutlineVerified,
} from "react-icons/md";
import { PiWatchBold } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";

const JobDetailsCard = () => {
  const job = useLoaderData();
  console.log(job);
  const {
    title,
    jobType,
    applicationDeadline,
    company,
    location,
    // requirements,
    salaryRange,
    // description,
    // responsibilities,
  } = job;
  return (
    
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="flex items-center space-y-6">
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                {title}
              </h1>

              <div className="flex items-center md:space-x-2">
                <p className="flex items-center gap-1 text-gray-400 text-sm">
                  <BiBriefcase></BiBriefcase>
                  {jobType}
                </p>
                <p className="flex items-center gap-1 text-gray-400 text-sm">
                  <IoMdTime></IoMdTime>
                  {applicationDeadline}
                </p>
              </div>
            </div>
          </div>

          <Link to={""} className="btn btn-primary  hover:bg-blue-950 ">
            <MdOutlineVerified></MdOutlineVerified>
            Apply Now
          </Link>
        </div>
        <hr className="text-gray-300" />
        <div className="flex gap-10">
          <div className="container p-2 mx-auto sm:p-4 border border-gray-300 rounded-lg dark:text-gray-800 w-8/12">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              Employment Information
            </h2>
            <hr className="text-gray-300 mb-3" />
            <div className="flex gap-5">
              <div className="flex-1 overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead></thead>
                  <tbody className="text-lg">
                    {/* row 1 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <GiSpookyHouse></GiSpookyHouse>Industry
                        </p>
                      </td>
                      <td>
                        <p>{company}</p>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <AiOutlineDollarCircle></AiOutlineDollarCircle>Salary
                        </p>
                      </td>
                      <td>
                        <p>
                          ${salaryRange?.min} - ${salaryRange?.max}
                        </p>
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <BiBriefcase></BiBriefcase>Job type
                        </p>
                      </td>
                      <td>
                        <p>{jobType}</p>
                      </td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <MdOutlineUpdate></MdOutlineUpdate>Updated
                        </p>
                      </td>
                      <td>
                        <p>{job?.updated ? job?.updated : "Not available"}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex-1 overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead></thead>
                  <tbody className="text-lg">
                    {/* row 1 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <FaRegUserCircle></FaRegUserCircle>Job level
                        </p>
                      </td>
                      <td>
                        <p>{job?.jobLevel ? job?.jobLevel : "Not available"}</p>
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <FaAward></FaAward>Experience
                        </p>
                      </td>
                      <td>
                        <p>
                          {job?.experience ? job?.experience : "Not available"}
                        </p>
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <PiWatchBold></PiWatchBold>Deadline
                        </p>
                      </td>
                      <td>
                        <p>{applicationDeadline}</p>
                      </td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <td>
                        <p className="flex items-center gap-3 text-gray-500">
                          <MdOutlineLocationOn></MdOutlineLocationOn>Location
                        </p>
                      </td>
                      <td>
                        <p>{location}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="w-4/12 border border-gray-300 rounded-lg"></div>
        </div>
      </article>
    
  );
};

export default JobDetailsCard;
