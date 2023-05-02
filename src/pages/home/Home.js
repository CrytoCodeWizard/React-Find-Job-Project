import React from "react";
import Hero from "./Hero";
import JobCart from "./JobCart";
import Join from "./Join";
import Landing from "./Landing";
import WebSiteDetails from "./WebSiteDetails";
import Team from "../Team/Team";
import Jobs from "../Jobs";


const Home = () => {
  return(
  <div className="">
  <Landing />  
  <Join/>
  <JobCart />
  <Hero/>
      <div className="py-6">
        <h1 className="font-bold text-3xl  py-2">Find Jobs </h1>
        <Jobs />
 </div>
  <WebSiteDetails/>
  <Team/>


  </div>


)
}

export default Home;
