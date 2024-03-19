import React, { useState } from "react";
import "./Mynav.css";

import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';


export default function MyNav({onSearch}){




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
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
                onKeyUp={(e) => onSearch(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )

}