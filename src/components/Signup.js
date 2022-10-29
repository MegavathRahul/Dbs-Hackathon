import React from 'react'
import { FaSignInAlt } from "react-icons/fa";
import {Form,Button} from 'react-bootstrap';
import singinimg from '../images/signin.svg';
import Login from '../components/Login'
function Signup() {
  return (
    <div>
    <h1 className="text-center text-primary">Signup</h1>

    <img src={singinimg} 
        width="250px" 
        className='d-sm-block d-none mx-auto' alt='img'
        />


    <Form className='w-50 mx-auto' >

        <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="enter username "  />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter password " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="enter city"/>
        </Form.Group>
        
        <Button variant="primary" type="submit">
        <a href="http://localhost:3000/login">S</a>Signup<FaSignInAlt/>
        </Button>
    </Form>
    </div>
  )
}

export default Signup
