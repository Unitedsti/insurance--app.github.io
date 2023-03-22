import React from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Img4 from "../../../assets/step1.PNG";

export default function Group() {
    return (
        <>
    <div className="container">
        <div class="row"  style={{marginTop:"80px"}}>
            <div class="col-sm-6 mb-3 mb-sm-0">
                <h5><p style={{color:'#274077'}}>Affordable employee group health & life program.</p>
                </h5>
                <Card class="row" style={{padding:"10px",margin:"0px"}}>
                <div className="CardGroup">
                <Card.Body>
                <Form>
    <Form.Group className="mb-3" controlId="formBasicEMAIL">
        <Form.Label>WORK EMAIL*</Form.Label>
        <Form.Control type="EMAIL" placeholder="Write your email here" />
        <Form.Text className="text-muted">
        No spam,we'll use this email for scheduling calls.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicCALL">
        <Form.Label>PHONE NUMBER</Form.Label>
        <Form.Control type="call" placeholder="Enter you phone number here" />
        <Form.Text className="text-muted">
        No spam,we'll use this email for scheduling calls.
        </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicLOCATION">
        <Form.Label>OFFICE LOCATION</Form.Label>
        <Form.Control type="NAME" placeholder="Where is your registered office located?" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicdropdown">
        <Form.Label>INDUSTRY YOU OPERATE IN</Form.Label>
        <Form.Control type="dropdown" placeholder="Which industry do you operate in?"/>
    </Form.Group>
    </Form>
                </Card.Body>
                </div>
                </Card>
            <Card class="column" style={{padding:"10px",margin:"0px"}}>
            <CardGroup>
                    <div className="Card.Body">
                    <Card.Img variant="top"/>
                    <img src={Img4} alt="" />
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

