import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BackgroundImage from "./assets/andrei-r-popescu-evDCeV-adM4-unsplash.jpg";
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Profile () {

  return (
    <div style={{
      minHeight: "100vh", 
      width: "100vw",
      position:"relative",
      backgroundColor:"#DAD4B5"
    }}>
      <Navbar data-bs-theme="dark" fixed="top" style={{backgroundColor:"#800000"}}>
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

      <div className="mt-5" style={{fontFamily:"Georgia, seriff", 
              display: "flex",
              justifyContent: "center",
              paddingTop:"60px",
              display: "flex",
            flexDirection:"column",}}>
      
      <Card style={{height:"10rem",width:"100vw",justifyContent: "center", alignItems: "center", backgroundColor:'#982B1C',marginTop:"70px"}}>
      <Card.Body style={{fontSize:"3rem",color:"white",fontWeight:"bold"}}>About Me</Card.Body>
        </Card>
        <div style={{paddingTop:"100px"}}>
       
        <p style={{fontSize:"1.2rem"}}>
        Name: <br />
        Narvato, Dominnica San Lorenzo <br />
        <hr />
        <br />
        </p>
        <p>
        Birthday: <br />
        August 8, 2000 <br />
        <hr />
        <br />
        </p>
        <p>
        Address: <br />
        #182 San Antonio, Cagbunga Gainza Camarines Sur <br />
        <hr />
        <br />
        </p>
        <p>
        Email Address: <br />
        dominicanarvato@gmailo.com <br />
        <hr />
        <br />
        </p>
        <p>
        Contact Number: <br />
        +639386490799
        <hr />
        </p>
     
        </div>
      </div>

    </div>
  )
}

export default Profile
