import React from "react";
import { Form, Button} from 'react-bootstrap';


const Contact= () =>{
    return(
        <div>
          <div className="about">
           <h2>Contact Us</h2>
          </div>
          <div className="container p-5">

          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="name"  />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Your Email</Form.Label>
    <Form.Control type="email"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>
</div>
        </div>
    );

}
export default Contact;