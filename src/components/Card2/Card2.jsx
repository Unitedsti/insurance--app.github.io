/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {MdArrowForwardIos} from "react-icons/md";
import { FaHeartbeat } from 'react-icons/fa';
import Img2 from "../../assets/people.jpeg";
import Img3 from "../../assets/Capture.PNG";
import Icon1 from "../../assets/webp.jpeg";
import Icon2 from "../../assets/team.png";
import Icon3 from "../../assets/employee.jpeg";
import Icon4 from "../../assets/dedictaeed.png";
import Icon5 from "../../assets/claims.png";            
import {BsShieldFillCheck} from "react-icons/bs"; 
export default function Card2() {
  return (
    <>
    
    <div className="container">
    <div class="row"  style={{marginTop:"60px"}}>
  <div class="col-sm-5 mb-3 mb-sm-0">
  <h5><p style={{color:"#274077"}}>Affordable employee group health & life program</p></h5>
    <div class="card inputcard text-center" style={{padding:"30px",height:"50vh"}}>
      <div class="card-body" >
        <h3>LET'S GET STARTED</h3>
        <h5>Is your company buying insurance for the first time</h5>
      
        <div class="row row-cols-2 row-cols-md-2 ">
  <div class="col">
    <div class="card mb-3" style={{backgroundColor:"#E4BD1A ",padding:"20px",border:"1px solid white",borderTop:"5px solid rgba(0, 4, 258, 0.596)"}}>
      <BsShieldFillCheck style={{fontSize:"100px",color:"white",marginLeft:"30px"}}/>
      <p style={{marginTop:"5px",color:"white"}}>Health Policy</p>
    </div>
  </div>
  <div class="col">
    <div class="card mb-3" style={{backgroundColor:"#E4BD1A",padding:"20px",border:"1px solid white",borderTop:"5px solid rgba(0, 4, 255, 0.596)"}}>
    <FaHeartbeat style={{textAlign:"center",fontSize:"100px",color:"white",marginLeft:"30px"}}/>
     <p style={{marginTop:"5px",color:"white"}}>Life Policy</p>
    </div>
  </div>
  
  
</div>
<div class="row">
  <div className="col-5" style={{marginTop:"25px"}}>
  <button type="button" class="btn btn-warning w-100 btn-lg" style={{backgroundColor:"#E4BD1A",border:"2px solid white",borderRadius:"30px",color:"white"}}>Back</button>  
  </div>
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <div className="col-5" style={{marginTop:"25px"}}>
  <button type="button" class="btn btn-warning w-100 btn-lg" id="button-addon2"  style={{backgroundColor:"white",border:"2px solid #274077",borderRadius:"30px",color:"#274077",borderColor:"#274077"}}>Next <MdArrowForwardIos  style={{color:"white",marginLeft:"50px",background:"#274077"}}/></button>  
  </div>
  
</div>
      </div>
    </div>
    
  </div>
  <div class="col-sm-7">
    <div class="card" style={{border:"0px solid black",height:"50"}}>
      <div class="card-body">
      <div class="row row-cols-1 row-cols-md-2">
  <div class="col">
    <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}} >
  <div class="row ">
    <div class="col-md-4" >
<img src={Icon1} alt="ICON" style={{marginLeft:"10px",marginTop:"10px",marginBottom:"10px",height:"6vh"}}/>
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title" style={{color:"#274077",marginTop:"10px"}}>HR Portal</h6>
        Add/Remove employees on them go and much more.
    </div>
  </div>
</div>  
  </div>
  <div class="col">
    <div class="card mb-1"style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}} >
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon2} alt="ICON" style={{marginLeft:"15px",marginTop:"6px",marginBottom:"5px",height:"7vh"}}/>
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title"style={{color:"#274077",marginTop:"10px"}}>Team Training</h6>
        Simplifying insurance for your team.
    </div>
  </div>
</div>
  </div>
  <div class="col">
    <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}}>
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon3} alt="ICON" style={{marginLeft:"27px",marginTop:"10px",marginBottom:"10px",height:"6vh"}} />
    </div>
    <div class="col-md-8">
        <h6 class="card-title" style={{color:"#274077",marginTop:"8px"}}>Employee App</h6>
        View your benefits,aceess guides and flies claims.
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}}>
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon4} alt="ICON" style={{marginLeft:"24px",marginTop:"5px",marginBottom:"5px",height:"7vh"}} />
    </div>
    <div class="col-md-8">
        <h6 class="card-title" style={{color:"#274077",marginTop:"7px"}}>Dedicated benefits mananger</h6>
        Solutions to all your problem,one call away.
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}} >
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon5} alt="ICON" style={{marginLeft:"24px",marginTop:"4px",marginBottom:"5px",height:"7vh"}} />
    </div>
    <div class="col-md-8">
        <h6 class="card-title" style={{color:"#274077",marginTop:"10px"}}>Seamless Claims Experience</h6>
        Filling claims made easy,fast and accessible.
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}}>
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon2} alt="ICON" style={{marginLeft:"24px",marginTop:"5px",marginBottom:"5px",height:"7vh"}} />
    </div>
    <div class="col-md-8">
        <h6 class="card-title" style={{color:"#274077",marginTop:"10px"}}>Team Training</h6>
        Simplifying insurance for your team. 
    </div>
  </div>
</div>
  </div>
</div>
<div className="row ">
  <div className="col-12">
    <div class="text" style={{textAlign:"right",marginTop:"30px", color:"#274077",marginLeft:"8 0px"}}>
    <h4><p>Give your team protection beyond haelth</p></h4>
    </div>
    <div className="card" style={{marginLeft:"60px"}}>
      <img src={Img2} alt="" />
    </div>
  </div>
</div>
</div>
    </div>
  </div>
  <div class="text">
      <p><h4><p style={{color:"#274077",textAlign:"left",marginBottom:"10px"}}>Trusted By 150+ Organizations In Pakistan</p></h4></p>
    <a href="#" style={{alignItems:"left",marginRight:"200px"}} ><img src={Img3} alt="" /></a>
  </div>
</div>
</div>
    </>
  )
}
