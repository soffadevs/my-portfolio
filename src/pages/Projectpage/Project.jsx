import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import NavbarPage from '../../components/NavbarPage'
import Footer from '../../components/Footer'

import Huddle from '../../assets/images/huddle.jpg'
import Counter from '../../assets/images/counter.jpg'
import LandingPage from '../../assets/images/landingPage.jpg'
import Sign from '../../assets/images/signup.jpg'
import Social from '../../assets/images/social.jpg'
import Todo from '../../assets/images/todo.jpg'

import '../Projectpage/Project.css'



const Project = () => {
  return (
    <div>
    <NavbarPage/>

      <Container className="my-5 images">
        <h2 className='About-title'>MY PROJECT</h2>
      <Row>
        <Col xs={12} sm={6} md={4}>
        <a href="https://soffadevs.github.io/passenger-counter-app/">
          <img className='counter' src={Counter} alt="counter App" />
          <p>View project</p>
          </a>
          
        </Col>
         <Col xs={12} sm={6} md={4}>
          <a href=" https://soffadevs.github.io/TodoList/">
            <img className='todo' src={Todo} alt="TodoList"/>
          <p>View project</p>
          </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
        <a href="https://soffadevs.github.io/JavascriptClass/">
           <img className='sign' src={Sign} alt="SignUP form" />
          <p>View project</p>
        </a>
         
        </Col>
        <Col xs={12} sm={6} md={4}>
        <a href="https://soffadevs.github.io/huddle-landing-page/">
           <img className='huddle' src={Huddle}  alt="Landing page" />
           <p>View project</p>
        </a>
         
        </Col>
        <Col xs={12} sm={6} md={4}>
        <a href="https://soffadevs.github.io/social-media-link/">
           <img className='social' src={Social} alt="Social media link" />
          <p>View project</p>
        </a>
         
        </Col>
         <Col xs={12} sm={6} md={4}>
        <a href="https://soffadevs.github.io/MTA-Frontend_class/">
           <img className='page' src= {LandingPage} alt="Landing page"/>
           <p>View project</p>
        </a>
         
        </Col>
      </Row>

       <div   className='more'> <a href="https://github.com/soffadevs"><h4>SEE MORE</h4></a></div>

     

     


    </Container>
    
      

    <Footer/>

    </div>
  )
}

export default Project