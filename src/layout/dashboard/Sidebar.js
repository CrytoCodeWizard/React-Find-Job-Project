import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const {user:{role}}=useSelector(state=>state.auth)
  return (
    <div className='bg-primary/10 col-span-2 h-screen sticky top-0'>
      <ul className='flex flex-col gap-2 w-full h-full  p-3'>
        <div className='flex justify-between items-center text-primary my-1'>
          <Link to='/' className='flex items-center'>
            <FaChevronLeft />
            <h1>Back</h1>
          </Link>
          <h1 className='text-xl'>Dashboard</h1>
        </div>
        <li>
         {role==="employer" && <Link
            className='hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full'
            to='add-job'
          >
            Add Job
          </Link>}

         {role==="candidate" && <Link
            className='hover:bg-primary hover:text-white bg-primary/10 transition-all w-full block py-2 px-3 rounded-full'
            to='applied-jobs'
          >
          Applied Jobs
          </Link>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
