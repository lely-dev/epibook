import React, { useContext } from "react";
import { DarkMode } from "../../Context/DarkModeProvider";
import { A, Col, Row, P, Li, Ul, H4, Container } from "react-bootstrap";

export default function MyFooter() {
  const { theme } = useContext(DarkMode);

  return (
    <Container fluid bg={theme} variant={theme}>
      <Row>
        <Col>
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Web design</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h4>About</h4>
          <ul>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Legacy</a>
            </li>
          </ul>
        </Col>
        <Col>
          <h4>Careers</h4>
          <ul>
            <li>
              <a href="#">Job openings</a>
            </li>
            <li>
              <a href="#">Employee success</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Epibook © 2018</p>
        </Col>
      </Row>
    </Container>
  );
}
