import React from "react";
import "./Mynav.css";

import { Navbar, Container, Nav } from 'react-bootstrap';


export default function MyNav(){

    return(
    <Navbar expand="lg" className="bg-body sticky-top">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )

}