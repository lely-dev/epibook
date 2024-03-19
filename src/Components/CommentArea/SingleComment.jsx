import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



export default function SingleComment(props) {

    const {comment, rate} = props;

    //DELATE COMMENT


    //MODIFY COMMENT

  return (
    <>
    <ListGroup border-bottom>
      <div>{comment}</div>
      <div>{rate}</div>
      <div>
      <FontAwesomeIcon icon={faStar} />
      </div>
    </ListGroup>
      
    </>
  )
}
