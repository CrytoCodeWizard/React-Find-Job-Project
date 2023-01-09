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
          data?.data?.map(({position,companyName,_id,location,employmentType})=>
          <>


<div
      key={_id}
      className='border border-gray-300 shadow-xl p-5 rounded-2xl text-primary'
    >
      <div className='flex justify-between  text-primary'>
        <div>
          <p className='text-xl'>{position}</p>
          <small className='text-primary/70 '>
            by{" "}
            <span className='font-semibold hover:text-primary cursor-pointer hover:underline transition-all'>
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className='flex justify-between items-center mt-5'>
        <p>{employmentType}</p>
        <button className='btn' onClick={() => navigate(`/job-details/${_id}`)}>
          Details
        </button>
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
