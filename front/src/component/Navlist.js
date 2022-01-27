import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap"
import {Link} from "react-router-dom"

function Navlist() {
  return (
  <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Pharma</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to='/' >Home</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


  </div>
  )
}

export default Navlist;
