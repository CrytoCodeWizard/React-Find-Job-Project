import React from 'react';
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const JobCart = () => {
    return (
        <div className="bg-secondary mt-6 p-6 ">
            <h1 className="font-bold text-3xl text-center py-6">Find Jobs</h1>
            <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 py-6'>


              <Link to="/jobs">
              <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl"> <BiSearchAlt /> </div>
                        <div className=""><h1 className="font-bold text-2xl">Web Development</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl"> <BiSearchAlt /> </div>
                        <div className=""><h1 className="font-bold text-2xl">Web Design</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl"> <BiSearchAlt /> </div>
                        <div className=""><h1 className="font-bold text-2xl">UI/UX Design</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div className="bg-white p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl "> <BiSearchAlt /> </div>
                        <div className=""><h1 className="font-bold text-2xl">Software Dev.</h1></div>
                    </div>
                </div>
              </Link>
            

             






            </div>
        </div>
    );
};

export default JobCart;