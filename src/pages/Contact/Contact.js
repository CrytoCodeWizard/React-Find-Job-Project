import React from 'react';
import { HiPhoneMissedCall } from 'react-icons/hi';
import { AiOutlineMail,AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';
import Map from './Map';


const Contact = () => {
    return (
 <div className='px-12'>
         <h1 className='text-black font-bold  text-3xl '>Our Location <span className='text-primary font-bold'>US</span></h1>
         <Map/>


         <div className='grid justify-content-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-6 '>
            <div>
                <div class="card w-64 grid justify-center shadow-xl p-6">
                    <figure class="grid justify-center  pt-10 text-4xl text-primary">
                 <HiPhoneMissedCall/>
                        
                     </figure>
                    <div class="card-body items-center text-center">
                    <h1 className='text-black font-bold  text-2xl text-center'>Call Us On</h1>
                    <h1 className='text-black font-bold  text-1xl text-center'>+768979809</h1>

                    </div>
                </div>
            </div>
            <div>
                <div class="card w-64 grid justify-center shadow-xl p-6">
                    <figure class="grid justify-center  pt-10 text-4xl text-primary">
                    <AiOutlineMail/>      
                        
                     </figure>
                    <div class="card-body items-center text-center">
                    <h1 className='text-black font-bold  text-2xl text-center'>Mail</h1>
                    <h1 className='text-black font-bold  text-1xl text-center'>mJob@gmail.com</h1>

                    </div>
                </div>
            </div>
            <div>
                <div class="card w-64 grid justify-center shadow-xl p-6">
                    <figure class="grid justify-center  pt-10 text-4xl text-primary">
                    <AiFillLinkedin/>      
                        
                     </figure>
                    <div class="card-body items-center text-center">
                    <h1 className='text-black font-bold  text-2xl text-center'>LinkedIn</h1>
                    <h1 className='text-black font-bold  text-1xl text-center'>MozaLinked</h1>

                    </div>
                </div>
            </div>
            <div>
                <div class="card w-64 grid justify-center shadow-xl p-6">
                    <figure class=" grid justify-center pt-10 text-4xl text-primary">
                    <AiFillFacebook/>      
                        
                     </figure>
                    <div class="card-body items-center text-center">
                    <h1 className='text-black font-bold  text-2xl text-center'>facebook</h1>
                    <h1 className='text-black font-bold  text-1xl text-center'>MozaFacebook</h1>

                    </div>
                </div>
            </div>
         
               






        </div>
       
 </div>
    );
};

export default Contact;