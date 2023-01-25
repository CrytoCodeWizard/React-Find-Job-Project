import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BiSearchAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const JobCart = () => {
    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);
    return (
        <div className=" mt-6 p-6 ">
            <h1 className="font-bold text-3xl  py-2">Explore By Category</h1>
            <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 '>


              <Link to="/jobs">
              <div  data-aos="zoom-in"  className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl"> <BiSearchAlt /> </div>
                        <div className=""><h1 className="text-2xl">Web Deve.</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div  data-aos="zoom-in" className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl"> <BiSearchAlt /> </div>
                        <div className=""><h1 className="text-2xl">Web Design</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div  data-aos="zoom-in" className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl"> <BiSearchAlt /> </div>
                        <div className=""><h1 className="text-2xl">UI/UX Design</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div  data-aos="zoom-in" className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl "> <BiSearchAlt /> </div>
                        <div className=""><h1 className=" text-2xl">Software Dev.</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div data-aos="zoom-in" className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl "> <BiSearchAlt /> </div>
                        <div className=""><h1 className=" text-2xl">Software Dev.</h1></div>
                    </div>
                </div>
              </Link>
              <Link to="/jobs">
              <div  data-aos="zoom-in" className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl "> <BiSearchAlt /> </div>
                        <div className=""><h1 className=" text-2xl">Software Dev.</h1></div>
                    </div>
                </div>
              </Link>
              <Link data-aos="zoom-in" to="/jobs">
              <div className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl "> <BiSearchAlt /> </div>
                        <div className=""><h1 className=" text-2xl">Software Dev.</h1></div>
                    </div>
                </div>
              </Link>
              <Link data-aos="zoom-in"  to="/jobs">
              <div className="bg-white shadow-2xl p-12 grid hover:bg-primary hover:text-white justify-center">
                    <div className=" grid  justify-center">
                        <div className="grid  justify-center text-3xl "> <BiSearchAlt /> </div>
                        <div className=""><h1 className=" text-2xl">Software Dev.</h1></div>
                    </div>
                </div>
              </Link>
            

             






            </div>
        </div>
    );
};

export default JobCart;