import React from "react";
import { useParams} from "react-router-dom";
import { useGetJobByIdQuery } from "../features/api/job/jobApi";



const JobDetails = () => {
  const {id}=useParams()
  console.log(id)
  const {data,isLoading,isError}=useGetJobByIdQuery(id);
  const {position,overview} = data?.data || {};
  console.log(data)


  return (
    <div className='pt-14'>
    <div className="card w-96 bg-base-100 shadow-xl p-12">
  <div className="card-body">
    <h2 className="card-title">{position}</h2>
    <p>{overview}</p>
    <div className="card-actions justify-end">
    <button className='border bg-primary text-white px-12 py-2'>Apply Now</button>

    </div>
  </div>
</div>

    </div>
  );
};

export default JobDetails;
