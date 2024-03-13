import React from 'react';
import { useState } from 'react';
import './SingleBook.css';
import { Card, Button, Col } from 'react-bootstrap';


export default function SingleBook(props) {

const [selected, setSelected] = useState(false);

    function selectedBook() {
      setSelected(!selected);
    }



  return (
    <Col md={3} className='g-5'>
    <Card border={selected ? 'danger' : 'none'}>
      <Card.Img variant="top" src={props.img}/>
      <Card.Body border='danger' className='d-flex flex-column'>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary" onClick={selectedBook}>Buy</Button>
      </Card.Body>
      </Card>
      </Col>
  )
}
