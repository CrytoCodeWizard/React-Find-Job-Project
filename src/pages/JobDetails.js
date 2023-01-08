import React from "react";
import { useParams} from "react-router-dom";
import { useGetJobByIdQuery } from "../features/api/job/jobApi";



const JobDetails = () => {
  const {id}=useParams()
  console.log(id)
  const {data,isLoading,isError}=useGetJobByIdQuery(id);
  const {position} = data?.data || {};
  console.log(data)


  return (
    <div className='pt-14'>
      <h1>this is job details</h1>

      <button className='border bg-primary text-white px-12 py-2'>{position}</button>
    </div>
  );
};

export default JobDetails;
