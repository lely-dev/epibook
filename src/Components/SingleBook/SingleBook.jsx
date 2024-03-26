import React, { useContext } from "react";
import "./SingleBook.css";
import { Card, Button, Col } from "react-bootstrap";
import { DarkMode } from "../../Context/DarkModeProvider";

export default function SingleBook(props) {
  const { theme } = useContext(DarkMode);

  const { title, img, elementId, selected, setSelected } = props;

  return (
    <Col md={4} bg={theme} variant={theme} className="p-4">
      <Card border={selected === elementId ? "danger" : "none"}>
        <Card.Img variant="top" src={img} />
        <Card.Body border="danger" className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" onClick={() => setSelected(elementId)}>
            Reviews
          </Button>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
