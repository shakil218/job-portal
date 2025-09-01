import React from "react";
import { motion } from "motion/react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddJobs = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddJob = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your application submitted successfully!",
            icon: "success",
          });
          navigate("/my-posted-jobs");
        }
      });
  };
  return (
    <div className="my-5">
      <h1 className="text-3xl font-bold md:text-5xl text-center">
        Add a new{" "}
        <motion.span
          animate={{
            color: ["#2510e6", "#a432d9", "#16ba2c", "#f73d0a", "#2510e6"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Job!
        </motion.span>
      </h1>
      <form onSubmit={handleAddJob} className="card-body">
        <fieldset className="fieldset">
          {/* column 1 */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Job Title */}
            <div className="flex-1">
              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Job Title"
                required
              />
            </div>
            {/*Job Location */}
            <div className="flex-1">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Location"
                required
              />
            </div>
          </div>
          {/* column 2 */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Company */}
            <div className="flex-1">
              <label className="label">Company</label>
              <input
                type="text"
                name="company"
                className="input w-full"
                placeholder="Company"
                required
              />
            </div>
            {/* Company Logo */}
            <div className="flex-1">
              <label className="label">Company Logo URL</label>
              <input
                type="url"
                name="company_logo"
                className="input w-full"
                placeholder="Company Logo URL"
                required
              />
            </div>
          </div>
          {/* column 3 */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Hr Name */}
            <div className="flex-1">
              <label className="label">Hr-Name</label>
              <input
                defaultValue={user?.displayName}
                type="text"
                name="hr_name"
                className="input w-full"
                placeholder="Hr-Name"
                required
              />
            </div>
            {/* Hr Email */}
            <div className="flex-1">
              <label className="label">Hr-Email</label>
              <input
                defaultValue={user?.email}
                type="email"
                name="hr_email"
                className="input w-full"
                placeholder="Hr-Email"
                required
              />
            </div>
          </div>
          {/* column 4 */}
          {/* job description */}
          <div>
            <fieldset className="fieldset">
              <legend className="text-gray-500">Job Description</legend>
              <textarea
                className="textarea w-full"
                name="description"
                placeholder="Description"
                required
              ></textarea>
            </fieldset>
          </div>
          {/* column 5 */}
          {/* job description */}
          <div>
            <fieldset className="fieldset">
              <legend className="text-gray-500">Requirements</legend>
              <textarea
                className="textarea w-full"
                name="requirements"
                placeholder="Write each requirements in a new line"
                required
              ></textarea>
            </fieldset>
          </div>
          {/* column 6 */}
          {/* job description */}
          <div>
            <fieldset className="fieldset">
              <legend className="text-gray-500">Responsibilities</legend>
              <textarea
                className="textarea w-full"
                name="responsibilities"
                placeholder="Write each responsibilities in a new line"
                required
              ></textarea>
            </fieldset>
          </div>
          {/* column 7 */}
          <div className="flex flex-col md:flex-row gap-3">
            {/* Job Type */}
            <div className="flex-1">
              <fieldset className="fieldset">
                <legend className="text-gray-500">Job Type</legend>
                <select
                  defaultValue="Pick a job type"
                  name="jobType"
                  className="select w-full"
                  required
                >
                  <option disabled={true}>Pick a job type</option>
                  <option>Full-Time</option>
                  <option>Inturn</option>
                  <option>Part-Time</option>
                  <option>On-site</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                </select>
              </fieldset>
            </div>
            {/*Job Category */}
            <div className="flex-1">
              <fieldset className="fieldset">
                <legend className="text-gray-500">Category</legend>
                <select
                  defaultValue="Pick a job category"
                  name="category"
                  className="select w-full"
                  required
                >
                  <option disabled={true}>Pick a job category</option>
                  <option>Engineering</option>
                  <option>Marketing</option>
                  <option>Finance</option>
                  <option>Teaching</option>
                </select>
              </fieldset>
            </div>
            {/*Application deadline */}
            <div className="flex-1">
              <label className="label">Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                className="input w-full"
                placeholder="Application Deadline"
                required
              />
            </div>
          </div>
          {/* column 8 */}
          <div>
            <label>Salary Range</label>
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-3">
              {/* minimum salary range */}
              <div className="">
                <label className="label">min</label>
                <input
                  type="number"
                  name="min"
                  className="input w-full"
                  placeholder="min"
                  required
                />
              </div>
              {/* maximum salary range */}
              <div className="">
                <label className="label">max</label>
                <input
                  type="number"
                  name="max"
                  className="input w-full"
                  placeholder="max"
                  required
                />
              </div>
              {/* salary currency */}

              <fieldset className="fieldset">
                <legend className="text-gray-500">Currency</legend>
                <select
                  defaultValue="Pick a salary currency"
                  name="currency"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a salary currency</option>
                  <option>bdt</option>
                  <option>us-dollar</option>
                  <option>euro</option>
                  <option>dinar</option>
                  <option>dirham</option>
                </select>
              </fieldset>
            </div>
          </div>
          {/* Submit Button */}
          <button className="btn btn-primary hover:bg-blue-950 mt-4">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddJobs;
