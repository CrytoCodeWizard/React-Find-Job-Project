import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetJobQuery } from "../features/api/job/jobApi";

const Jobs = () => {
  const navigate = useNavigate();
  const {data,isLoading,isError}=useGetJobQuery();
  // const {position,compantName}=data.data || {}
  console.log(data)

  return (
    <div className='pt-14'>
      <h1>This is job page</h1>
      <div>
        {
          data?.data?.map(({position,companyName,_id})=>
          <>
          <h1>{position}</h1>
          <p>{companyName}</p>
          <button className="bg-primary text-white px-12 py-2" onClick={()=>navigate(`/job-details/${_id}`)}>Details</button>
          
          </>
          )
        }
      </div>
    </div>
  );
};

export default Jobs;
