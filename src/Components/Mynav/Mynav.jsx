import React, { useContext } from "react";
import "./Mynav.css";
import { DarkMode } from "../../Context/DarkModeProvider";
import { Navbar, Container, Nav, Form, Row, Col } from "react-bootstrap";
import BtnDarkMode from "./BtnDarkMode";

export default function MyNav({ onSearch }) {
  const { theme } = useContext(DarkMode);

  return (
    <Navbar expand="lg" className="sticky-top" bg={theme} variant={theme}>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
          <BtnDarkMode />
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
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
