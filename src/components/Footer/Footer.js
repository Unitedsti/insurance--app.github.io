import React from "react";
import Logo from "../../assets/footer.PNG";
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram,   } from "react-icons/fa";
//import {Link} from "react-router-dom";
export default function Footer() {
        return(
            <>
            <div className="container-fluid footer" style={{background:"white",padding:"20px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>
                                    <img src={Logo} style={{height:"40px"}} />
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li>
                                    About Us 
                                </li>
                            </ul>
                        </div>
                        <div className='col'>
                        <ul>
                            <li>Careers</li>
                        </ul>
                        </div>
                        <div className='col'>
                        <ul>
                            <li>Clients</li>
                        </ul>
                        </div>
                        <div className='col'>
                        <ul>
                            <li>News</li>
                        </ul>
                        </div>
                        <div className='col'>
                        <ul>
                            <li>Services</li>
                        </ul>
                        </div>
                        <div className='col'>
                        <ul>
                            <li>Contact Us</li>
                        </ul>
                        </div>
                        <div className='col'> 
        <ul>
        <a> <FaFacebook style={{fontSize:"17px",color:"orange",cursor:"pointer"}}/></a> <a> <FaTwitter style={{fontSize:"17px",color:"orange",cursor:"pointer"}}/></a>  <a><FaLinkedinIn style={{fontSize:"17px",color:"orange",cursor:"pointer"}}/></a> <a><FaInstagram style={{fontSize:"17px",color:"orange",cursor:"pointer"}}/></a>
        </ul>
        </div>

                    </div>
                    <div className="row"> 
        <hr />
        <p style={{textAlign:"left"}}>&copy; Copyright FIDELITY INSURANCE BROKER All right reserved.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms of Services.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy</p>
    </div>
                </div>
            </div>
            </>
        )
}