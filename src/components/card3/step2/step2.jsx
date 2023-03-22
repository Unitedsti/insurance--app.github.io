import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Img5 from "../../../assets/step2.PNG";
import {IoMdMan} from "react-icons/io";
import Icon2 from "../../../assets/family.png";
import Icon3 from "../../../assets/spouse.PNG";

export default function step2() {
    return (
        <>
    <div className="container">
        <div class="row"  style={{marginTop:"80px"}}>
            <div class="col-sm-6 mb-3 mb-sm-0">
                <h5><p style={{color:'4169e1'}}>Affordable employee group health & life program.</p>
                </h5>
                <Card class="row" style={{padding:"10px",margin:"0px"}}>
                <div className="CardGroup">
                <Card.Body>
                <Form>
    <Form.Group className="mb-3" controlId="formBasicNUMBER">
        <Form.Label>HOW MANY EMPLOYEES DOES YOUR COMPANY HAVE?</Form.Label>
        <Form.Control type="NUMBER" placeholder="Enter approximate number of employees" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNUMBER">
        <Form.Label>WHAT'S THE AVERAGE AGE OF YOUR EMPLOYEES?</Form.Label>
        <Form.Control type="NUMBER" placeholder="Enter average age of your employeees" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicNUMBER">
        <Form.Label>WHAT TYPE OF INSURANCE ARE YOU LOOKING FOR?</Form.Label>
    </Form.Group>
    <div class="row row-cols-3 row-cols-md-3 ">
<div class="col">
    <div class="card mb-0" style={{backgroundColor:"#FFF",padding:"20px",border:"1px solid #274077",borderTop:"5px solid rgba(0, 4, 258, 0.596)"}}>
    <IoMdMan  style={{fontSize:"80px",color:"rgb(228,228,64)",marginLeft:"25px"}}/>
    <p style={{marginLeft:"10px"}}>Employee Only</p>
    </div>
</div>

<div class="col">
    <div class="card mb-0" style={{backgroundColor:"#FFF",padding:"20px",border:"1px solid #274077",borderTop:"5px solid rgba(0, 4, 255, 0.596)"}}>
    <img src={Icon2} alt="ICON"  style={{textAlign:"center",fontSize:"0px",color:"rgb(228,228,64)",marginLeft:"10px"}}/>
    <p>Employee,Spouse & Childern</p>
    </div>
</div>
<div class="col">
    <div class="card mb-0" style={{backgroundColor:"#FFF",padding:"20px",border:"1px solid #274077",borderTop:"5px solid rgba(0, 4, 255, 0.596)"}}>
    <img src={Icon3} alt="ICON"  style={{textAlign:"center",fontSize:"0px",color:"rgb(228,228,64)",marginLeft:"10px"}}/>
    <p></p>
    </div>
</div>
</div>
    </Form>
                </Card.Body>
                </div>
                </Card>
            <Card class="column" style={{padding:"10px",margin:"0px"}}>
            <CardGroup>
                    <div className="Card.Body">
                    <Card.Img variant="top"/>
                    <img src={Img5} alt="" />
                    </div>
                    <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
        </Card.Text>
                </CardGroup>
            </Card>
            </div>
        </div>
    </div>
        </>
    )
}