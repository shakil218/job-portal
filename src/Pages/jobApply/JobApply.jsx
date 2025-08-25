import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import useAuth from "../../hooks/useAuth";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const submitJobApplication = (event) => {
    event.preventDefault();
    const form = event.target;
    const linkedIn = form.linkedIn.value;
    const facebook = form.facebook.value;
    const resume = form.resume.value;

    const jobApplication = {
      application_id: id,
      applicant_email: user?.email,
      linkedIn,
      facebook,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Your application submitted successfully!",
            icon: "success",
          });
          navigate("/my-application")
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full border border-gray-300 shadow-lg my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-center m-3 p-3">Apply for Your <motion.span
              animate={{
                color: ["#2510e6", "#a432d9", "#16ba2c", "#f73d0a", "#2510e6"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Dream Job
            </motion.span></h1>
      <form onSubmit={submitJobApplication} className="card-body ">
        <fieldset className="fieldset">
          <label className="label">LinkedIn URL</label>
          <input
            type="url"
            name="linkedIn"
            className="input w-full"
            placeholder="LinkedIn url"
          />
          <label className="label">Facebook URL</label>
          <input
            type="url"
            name="facebook"
            className="input w-full"
            placeholder="Facebook url"
          />
          <label className="label">Resume URL</label>
          <input
            type="url"
            name="resume"
            className="input w-full"
            placeholder="Resume url"
          />
          <button className="btn btn-primary hover:bg-blue-950 mt-4">
            Apply
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
