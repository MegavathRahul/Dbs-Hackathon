import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import {Form,Button} from 'react-bootstrap';
function Main() {
    return (
      <div >
        <img src='https://assets.flightstats.com/common/fs-meta-social.jpg' 
        width="500px"
        className="d-sm-block d-none mx-auto"
         />
        
        <Form className='w-50 mx-auto'>

<Form.Group className="mb-3" controlId="formBasicFrom">
    <Form.Label>From</Form.Label>
    <Form.Control type="text" placeholder="enter from station "   />
</Form.Group>


<Form.Group className="mb-3" controlId="formBasicTo">
    <Form.Label>To</Form.Label>
    <Form.Control type="text" placeholder="enter to station "/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicDepartureDate">
    <Form.Label>Departure Date</Form.Label>
    <Form.Control type="date" placeholder="enter to departure date"/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicReturnDate">
    <Form.Label>Return Date</Form.Label>
    <Form.Control type="date" placeholder="enter to return date"/>
</Form.Group>

<Button variant="primary" type="submit">
 Search Flights <FaSignInAlt/>
</Button>
</Form>
      </div>
    )
  }
  
  export default Main;