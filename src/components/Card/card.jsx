/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MdArrowForwardIos ,} from "react-icons/md";
import {MdAutorenew} from "react-icons/md";             
import {BsShieldFillCheck} from "react-icons/bs";           

import Img2 from "../../assets/Capturee.jpeg";
import Icon1 from "../../assets/HR Portal.png"
import Icon2 from "../../assets/teamtraing.PNG"
import Icon3 from "../../assets/App.PNG"
import Icon4 from "../../assets/dedicated.PNG"
import Icon5 from "../../assets/Seamless.PNG"
export default function Card() {
  return (
    <>
    
    <div className="container">
    <div class="row"  style={{marginTop:"80px"}}>
  <div class="col-sm-5 mb-3 mb-sm-0" style={{marginTop:"30px"}}>
  <h5><p style={{color:"#274077"}}>Affordable employee group health & life program</p></h5>
    <div class="card inputcard text-center" style={{padding:"30px"}}>
      <div class="card-body">
        <h3>LET'S GET STARTED</h3>
        <h6>Is your company buying insurance for the first time?</h6>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buying insurance for the first time" aria-label="Recipient's username" style={{borderRadius:"160px 0px 2px 135px",borderColor:"#274077",height:"7vh"}} aria-describedby="button-addon2"/>
  <i className="input-icon uil uil-at" style={{marginLeft:"15px",marginTop:"9px"}}><BsShieldFillCheck/></i>
    <button class="btn btn-lg" type="button" id="button-addon2" style={{borderRadius:"10px 134px 135px 10px",backgroundColor:"#274077"}}><MdArrowForwardIos style={{color:"white"}}/></button>
</div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Renewing our insurance policy" style={{borderRadius:"134px 0px 2px 135px",borderColor:"#274077",height:"7vh"}} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
<i class="input-icon uil uil-at"  style={{marginLeft:"15px",marginTop:"9px"}}><MdAutorenew/></i>
<button class="btn btn-lg" type="button" id="button-addon2" style={{borderRadius:"10px 134px 135px 10px",backgroundColor:"#274077"}}><MdArrowForwardIos style={{color:"white"}}/></button>
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
    <div class="col-md-4">
<img src={Icon1} alt="ICON" style={{marginLeft:"10px",marginTop:"10px",marginBottom:"5px",height:"7vh"}}/>
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title" style={{color:"#274077",borderRadius:"50px",marginTop:"10px",marginRight:"5px"}}>HR Portal</h6>
        Add/Remove employees on them go and much more.
      
    </div>
  </div>
</div>  
  </div>
  <div class="col">
    <div class="card mb-1"style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}} >
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon2} alt="ICON" style={{marginLeft:"18px",marginTop:"10px",marginBottom:"5px",height:"7vh"}} />
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title"style={{color:"#274077",marginTop:"10px",marginRight:"25px"}}>Team Training</h6>
        Simplifying insurance for your team. 
      
    </div>
  </div>
</div>
  </div>
  <div class="col">
    <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}}>
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon3} alt="ICON" style={{marginLeft:"25px",marginTop:"8px",marginBottom:"8px",height:"7vh"}}/>
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title"style={{color:"#274077",marginTop:"8px"}}>Employee App</h6>
        View your benefits,aceess guides and flies claims.
      
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}}>
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon4} alt="ICON" style={{marginLeft:"18px",marginTop:"4px",marginBottom:"4px",height:"8vh"}} />
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title"style={{color:"#274077",marginTop:"6px"}}>Dedicated benefit manager</h6>
        Solutions to all your problem,one call away.
      
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}} >
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon5} alt="ICON" style={{marginLeft:"25px",marginTop:"10px",marginBottom:"5px",height:"7vh"}}/>
    </div>
    <div class="col-md-8">
      
        <h6 class="card-title"style={{color:"#274077",marginTop:"10px"}}>Seamless Claims experience</h6>
        Filling claims made easy,fast and accessible.
      
    </div>
  </div>
</div>
  </div>
  <div class="col">
  <div class="card mb-1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"15px",marginTop:"5px"}}>
  <div class="row ">
    <div class="col-md-4">
    <img src={Icon2} alt="ICON" style={{marginLeft:"19px",marginTop:"8px",marginBottom:"7px",height:"7vh"}} />
    </div>
    <div class="col-md-8">
        <h6 class="card-title"style={{color:"#274077",marginTop:"10px"}}>Team Training</h6>
        <p class="card-text" >Simplifying your insurance for your team.</p>
    </div>
  </div>
</div>
  </div>
</div>
<div className="row ">
  <div className="col-12">
    <div className="card" style={{marginTop:"50px"}}>
      <img src={Img2} alt=""/>
    </div>
  </div>
</div>
</div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
