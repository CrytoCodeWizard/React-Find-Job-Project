import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Map = () => {
    useEffect(() => {
        AOS.init({duration:2000})
  
    }, []);

    return (

      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-2  items-center'>

          <div data-aos="zoom-in" >
            
          <img src="https://i.ibb.co/BgtnpH6/London-Google-Maps.png" class="w-90 shadow-5xl" />
          </div>

            <div className="" data-aos="zoom-in" >
            <h1 class="mb-5 text-2xl font-bold">Good Job can Change life style</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum vel minus corrupti accusamus! Iusto, vel vitae tempora consequuntur ab sed, corrupti incidunt aliquam nisi est iure ipsa eum commodi veritatis ea ipsam quia delectus rem perspiciatis culpa voluptas dolorum. Officia, eum 


        
    </p>
    <button className='btn mt-6 font-white'>GTag Location</button>
         
            </div>
        
        </div>


      





    );
};

export default Map;