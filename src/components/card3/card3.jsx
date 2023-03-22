import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Img3 from "../../assets/insurance.webp";

export default function Group() {
  return (
    <>
        <div className="container">
        <div class="row"  style={{marginTop:"80px",marginLeft:"50px"}}>
            <div class="col-sm-6 mb-3 mb-sm-0">
                <h5><p style={{color:'#274077'}}>Affordable employee group health & life program.</p>
                </h5>
                <Card class="column" style={{padding:"10px",margin:"0px"}}>
                <CardGroup>
                  <div className="Card.Body">
                  <Form>
      <Form.Group className="mb-3" controlId="formBasiccompanyname">
        <Form.Label>COMPANY NAME*</Form.Label>
        <Form.Control type="name" placeholder="Please Enter your company name here" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>WOEK EMAIL*</Form.Label>
        <Form.Control type="email" placeholder="Write your work email here" />
        <Form.Text className="text-muted">
          No spam,we'll use this email for scheduling calls.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicnumbers">
        <Form.Label>WHERE WE CAN CALL YOU?</Form.Label>
        <Form.Control type="numbers" placeholder="Enter your mobile number here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNAME">
        <Form.Label>YOUR NAME</Form.Label>
        <Form.Control type="NAME" placeholder="Please enter your full name here" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNUMBER">
        <Form.Label>HOW MANY EMPLOYEES DOES YOUR COMPANY HAVE?</Form.Label>
        <Form.Control type="NUMBER" placeholder="Enter approximate number of employees" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicdropdown">
        <Form.Label>YOUR DEPARTMENT AT YOUR COMPANY?</Form.Label>
        <Form.Control type="dropdown" placeholder="Enter approximate number of employees"/>
      </Form.Group>
      </Form>
                  </div>
                </CardGroup>
                </Card>
                <Card class="row" style={{padding:"5px",margin:"10px"}}>
                  <CardGroup>
                    <div className="Card.Body">
                    <Card.Img variant="top"/>
                    <img src={Img3} alt="" />
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
  );
}