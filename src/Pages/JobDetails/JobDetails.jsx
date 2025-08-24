import React from 'react';
import JobDetailsCard from './JobDetailsCard';
import JobDetailsBanner from './JobDetailsBanner';
import NewsLetters from '../Shared/NewsLetters';

const JobDetails = () => {
  
  return (
    <div>
      <JobDetailsBanner></JobDetailsBanner>
      <JobDetailsCard></JobDetailsCard>
      <NewsLetters></NewsLetters>
    </div>
  );
};

export default JobDetails;