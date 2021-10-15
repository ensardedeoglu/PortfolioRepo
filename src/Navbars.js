import React from "react";
import { Navbar, Nav, NavbarBrand, Container} from 'react-bootstrap';
function Navbars() {
    return (
      <>
      <h1 href="#home">Ensar Dedeoglu</h1>
        <Navbar id="nav">
          <Container>
            <NavbarBrand href="#home">Software Engineer</NavbarBrand>
            <Nav id="navbar">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  
      </>
    )
  }
  
  export default Navbars;