import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function NotFound() {
  return (
    <>
      <Container fluid className="my-5">
        <Row>
          <Col className="text-center">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for could not be found.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
