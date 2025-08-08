import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyLogo from '../assets/images/soffadev.png'
import './CSS/NavbarPage.css';

const Example = () => {
  return (
    <div>
        <Navbar expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand>
            <img src={MyLogo} alt="" className='Logo'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Project">Project</Nav.Link>
              <Nav.Link href="Service">Service</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>
  )
}

export default Example