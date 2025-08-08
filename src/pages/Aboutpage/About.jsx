import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavbarPage from '../../components/NavbarPage'
import Footer from '../../components/Footer'


import Vscode from '../../assets/images/vscode.png'
import ReactLogo from '../../assets/images/react.png'
import Figma from '../../assets/images/figma.png'
import Github from '../../assets/images/github.jpg'

import './About.css'

const About = () => {
  return (
    <div>
      <NavbarPage />

          <Container className="my-5">
      <h2 className='About-title'>ABOUT ME</h2>
      <Row>
       
         <Col md={6} className="mb-4 about-text">
          <p>
            I am <span>SOFFIYAH ABDURRAZAQ</span>, a Frontend Developer with a passion for building user-centered digital experiences that don't just work but connect.
            My journey began with a strong curiosity about how websites are built, and that curiosity quickly
            turned into passion. With a unique blend of technical skill, creative vision, and people-centered leadership.
            My strength lies in blending creative design, technical development, and clear communication.
            I believe in building complete, end-to-end solutions that inspire and solve real-world problems because web development isn't just about what you craete, but the experience you deliver .
            Beyond the code, I'm also a UI/UX designer, a public speaker, and a natural leader who loves to collaborate, mentor, and inspire others to grow in their craft.
            I'm continuously learning, evolving, and building.
            <br />

           
          </p>
        </Col>

        <Col md={6}>
          <Row className="g-3">
            <Col xs={12} sm={6}>
              <Card className="h-100 card">
                <Card.Body>
                  <Card.Title style={{color: 'blue'}}>Problem Solver</Card.Title>
                  <Card.Text>
                    Always looking for creative solutions to challenges.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="h-100 card">
                <Card.Body>
                  <Card.Title style={{color: 'blue'}}>UI/UX Designer</Card.Title>
                  <Card.Text>
                    Focused on smooth, intuitive user experiences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="h-400 card">
                <Card.Body>
                  <Card.Title style={{color: 'blue'}}>Public Speaker</Card.Title>
                  <Card.Text>
                    Confident in sharing ideas and engaging with audiences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <Card className="h-100 card">
                <Card.Body>
                  <Card.Title style={{color: 'blue'}}>Creative Builder</Card.Title>
                  <Card.Text>
                    Enjoy transforming ideas into clean, functional web apps.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      <section className='tools-sec'>
         <h5 >Tools I use</h5>
      <div className='tools'>
        <img src={Vscode} alt="" id='vscode' />
        <img src={ReactLogo} alt=""  id='react' />
        <img src={Figma} alt="" id='figma' />
        <img src={Github} alt="" id='github' />
      </div>
      </section>
     
        


    <Footer/>
    </div>
  )
}

export default About