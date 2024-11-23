import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackgroundImage from "./assets/istockphoto-1270991083-1024x1024.jpg";

function AboutMe () {

  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh", 
      width: "100vw",
      paddingTop: "10px",
      position:"relative"
    }}>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My Personal Website</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#backgrounds">Backgrounds</Nav.Link>
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#about me">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default AboutMe
