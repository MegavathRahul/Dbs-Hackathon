import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {Route,Routes} from "react-router-dom"
import Home from '../Home';
import Signup from '../Signup';
import Contactus from '../Contactus';
import Login from '../Login';
import Main from '../main/Main';
import {NavLink} from 'react-router-dom';
function Header() {
  return (
    <div >
      <Navbar bg="dark" variant="dark" className='header'>
        <Container>
          <Navbar.Brand href="#home"> Flight Booking System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link pr-5" to={'/'} >Home</NavLink>
              <NavLink className="nav-link pr-5" to={'/signup'} >Signup</NavLink>
              <NavLink className="nav-link pr-5" to={'/login'} >Login</NavLink>
              <NavLink className="nav-link pr-5" to={'/contactus'} >Contactus</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
               

      <Routes>
        <Route path='/login' element={<Login/>}  />

        <Route path='/' element={<Home/>}  />

        <Route path='/signup' element={<Signup/>}  />

        <Route path='/contactus' element={<Contactus/>}  />

        <Route path='/main' element={<Main/>}  />
      </Routes>

    </div>
  )
}

export default Header
