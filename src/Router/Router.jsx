import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Pages/jobApply/JobApply";
import MyApplication from "../Pages/myApplication/MyApplication";
import AddJobs from "../Pages/addJobs/AddJobs";
import MyPostedJobs from "../Pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../Pages/viewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="flex flex-col justify-center items-center text-center min-h-screen gap-3">
        <h1 className="text-6xl text-emerald-300">Opps!</h1>
        <h1 className="text-5xl text-emerald-300">404</h1>
        <p>
          Page <span className="text-emerald-300">Not Found</span>.
        </p>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path:"/add-jobs",
        element:<PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      },
      {
        path:"/my-posted-jobs",
        element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
      },
      {
        path:"/view-applications/:job_id",
        element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`)
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-application",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/sign-in",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
