 import React from 'react'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Navbar from '../../components/NavbarPage'
import Footer from '../../components/Footer'

 import {faGithub, faLinkedin, faXTwitter} from "@fortawesome/free-brands-svg-icons";
 import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faCode, faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import './Service.css'
 
 
 const Service = () => {
   return (
     <div>
      <Navbar/>
        <Container className="my-5 ">
        <h2 className='About-title'>MY SERVICE</h2>
      <Row className='g-3 mx-auto'>
        <Col xs={12} sm={6}>
              <Card className="service-card">
                <Card.Body className='cbody'>
                  <Card.Title style={{color: 'blue'}}>
                    <FontAwesomeIcon icon={faCode} size="2x" /> <br /> <br />
                    Web Development</Card.Title>
                  <Card.Text>
                   As a developer, I bring designs to life using clean, responsive code.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        <Col xs={12} sm={6}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title style={{color: 'blue'}}>
                     <FontAwesomeIcon icon={faPenToSquare} size="2x" /> <br /> <br />
                    UI/UX Design</Card.Title>
                  <Card.Text>
                    As a designer, I craft intuitive interfaces with the user in mind.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
         
        </Row>
        </Container>

         <div className='contact'>
             <h4 id='contact-text'>CONTACT ME HERE</h4>
          <div className='contact-icons'>
            <a href="https://www.linkedin.com/in/abdurrazaq-soffiyah-619a402a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  id='linked'><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://x.com/samTech_creativ" style={{color: 'black'}}  id='twitter'><FontAwesomeIcon icon={faXTwitter} size="2x" /></a>
            <a href="https://github.com/soffadevs"  style={{color: 'black'}}  id='git'><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="#"  style={{color: 'black'}} id='envelop'> <FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
        </div>
         </div>

      <Footer/>
     </div>
   )
 }
 
 export default Service
