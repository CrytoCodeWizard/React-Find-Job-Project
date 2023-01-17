import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const WebSiteDetails = () => {
    return (
        <div className="bg-secondary mt-6 p-6 ">
        <h1 className="font-bold text-3xl text-center py-6">Company Details Jobs</h1>
        <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 py-6'>


   
          <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className="font-bold text-2xl">Jobs Avalable</h1></div>
                </div>
            </div>
     
       
          <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className="font-bold text-2xl">Employer</h1></div>
                </div>
            </div>
        
          <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className="font-bold text-2xl">connection</h1></div>
                </div>
            </div>
     
          <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className="font-bold text-2xl">cources</h1></div>
                </div>
            </div>
  
         
        

         






        </div>
    </div>
    );
};

export default WebSiteDetails;