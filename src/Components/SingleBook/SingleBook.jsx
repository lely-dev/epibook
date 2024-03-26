import React, { useContext } from "react";
import { useState } from "react";
import "./SingleBook.css";
import { Card, Button, Col } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";
import { DarkMode } from "../../Context/DarkModeProvider";

export default function SingleBook(props) {
  const { theme } = useContext(DarkMode);

  const { title, img, elementId, selected, setSelected } = props;

  return (
    <Col md={3} bg={theme} variant={theme}>
      <Card border={selected === elementId ? "danger" : "none"}>
        <Card.Img variant="top" src={img} />
        <Card.Body border="danger" className="d-flex flex-column">
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" onClick={() => setSelected(elementId)}>
            Reviews
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
