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

      <div>
      <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2'>
        {
          data?.data?.map(({position,companyName,_id})=>
          <>


<div className="card w-96 bg-base-100 shadow-xl p-12">
  <div className="card-body">
  <h1>{position}</h1>
  <p>{companyName}</p>
    <div className="card-actions justify-end">
    <button className="bg-primary text-white px-12 py-2 mt-2" onClick={()=>navigate(`/job-details/${_id}`)}>Details</button>
    </div>
  </div>
</div>





         
          
       
          
          </>
          )
        }
      </div>
    </div>
    </div>
  );
};

export default Jobs;
