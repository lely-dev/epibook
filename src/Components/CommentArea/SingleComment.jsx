import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function SingleComment(props) {

    const {comment, rate} = props;
    console.log(props);
  return (
    <>
    <ListGroup border-bottom>
      <div>{comment}</div>
      <div>{rate}</div>
      <div>
      <FontAwesomeIcon icon="fa-solid fa-star" />
      </div>
    </ListGroup>
      
    </>
  )
}
