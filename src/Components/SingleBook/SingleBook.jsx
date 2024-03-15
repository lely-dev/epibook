import React from 'react';
import { useState } from 'react';
import './SingleBook.css';
import { Card, Button, Col } from 'react-bootstrap';
import CommentArea from '../CommentArea/CommentArea';


export default function SingleBook(props) {

const {title, img}= props;

const [selected, setSelected] = useState(false);

    function selectedBook() {
      setSelected(!selected);
    }



  return (
    <Col md={3} className='g-5'>
    <Card border={selected ? 'danger' : 'none'}>
      <Card.Img variant="top" src={img}/>
      <Card.Body border='danger' className='d-flex flex-column'>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={selectedBook}>Buy</Button>
        {selected && <CommentArea />}
      </Card.Body>
      </Card>
      </Col>
  )
}
