import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pic from '../../assets/images/img.png'
import NavbarPage from '../../components/NavbarPage'
import Footer from '../../components/Footer'
import './Home.css';

const Home = () => {
  return (
    <div>
        <NavbarPage/>

        <Container fluid="md" className='my-2'>
      <Row>
        <Col className='hero-pic'>
            <img src= {Pic} alt="My pic" className='hero-img'/>
        </Col>
        <Col className='hero-text'>
            <h1>Hi, I'm <span>SOFFADEV.</span> A Frontend Developer</h1>
            <p>I'm a passionate frontend developer with a strong interest in full stack development. 
           I enjoy exploring new technologies, conducting research,
          and building creative solutions to real-world problems.
          My goal is to grow into a versatile developer capable of delivering impact digital experiences.</p>
        </Col>
      </Row>
    </Container>


    <Footer/>


    </div>
  )
}

export default Home