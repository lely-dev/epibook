import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function SingleBook(props) {
  return (
    <Card className="col-md-4">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">Buy</Button>
      </Card.Body>
      </Card>
  )
}
