import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Shared/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if(loading){
    <Spinner></Spinner>
  }

  if (user) {
    return children;
  }
  return <Navigate to={'/sign-in'} state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
