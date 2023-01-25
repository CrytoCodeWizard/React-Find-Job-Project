import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BiSearchAlt } from "react-icons/bi";


const WebSiteDetails = () => {
    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);
    return (
        <div className=" mt-6 p-6 ">
        <h1 className="font-bold text-3xl py-2 ">Company Details</h1>
        <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 '>


   
        <div  data-aos="zoom-in"  className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className=" text-2xl">Employer</h1></div>
                </div>
            </div>
        
     
       
          <div  data-aos="zoom-in"  className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className=" text-2xl">Employer</h1></div>
                </div>
            </div>
        
          <div  data-aos="zoom-in"   className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className=" text-2xl">connection</h1></div>
                </div>
            </div>
     
          <div  data-aos="zoom-in"  className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                <div className=" grid  justify-center">
                    <div className="grid  justify-center text-3xl"> 90K </div>
                    <div className=""><h1 className=" text-2xl">cources</h1></div>
                </div>
            </div>
  
         
        

         






        </div>
    </div>
    );
};

export default WebSiteDetails;