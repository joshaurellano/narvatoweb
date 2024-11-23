import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackgroundImage from "./assets/david-becker-TT6Vftu5NK0-unsplash.jpg";
import {Link} from 'react-router-dom';


function Profile() {

  return (
    <div style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh", 
      width: "100vw",
      position:"relative"
    }}>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Nica Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/home"></Nav.Link>
            <Nav.Link href="/backgrounds">Backgrounds</Nav.Link>
            <Nav.Link href="/photos">Photos</Nav.Link>
            <Nav.Link href="/about me">About Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{flex:"1", paddingTop:"60px"}}>
        <h1 style={{fontSize:"bold"}}>About Me</h1>

      </div>


    </div>
  )
}

export default Profile
