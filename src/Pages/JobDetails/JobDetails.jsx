import React from 'react';
import JobDetailsCard from './JobDetailsCard';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job = useLoaderData();
  console.log(job);
  return (
    <div>
      <h1>Job Details</h1>
      <JobDetailsCard></JobDetailsCard>
    </div>
  );
};

export default JobDetails;