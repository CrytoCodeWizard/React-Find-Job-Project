import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../components/reusable/Loading';
import { useGetJobQuery } from '../../features/api/job/jobApi';

const ManageJobs = () => {
  
    const {user:{email}}=useSelector(state=>state.auth)
    const {data,isLoading} =useGetJobQuery();
    console.log('dfhfgh',data)
  if(isLoading){
    return <Loading/>
  }


  
    return (
       
        <div>
  
        <div className='pt-14'>
        <h1 className='text-4xl text-primary p-2'>Manages Jobs</h1>

<div>
<div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-2'>
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
<div className='flex gap-2 justify-end items-center mt-5'>
<button className='btn' >
  Delete
</button>
<button className='btn' >
  Position off
</button>
</div>
</div>





 
  

  
  </>
  )
}
</div>
</div>
</div>
      </div>
      
    );
};

export default ManageJobs;