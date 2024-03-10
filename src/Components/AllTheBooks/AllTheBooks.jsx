import React from "react";
import "./AllTheBooks.css";

import { Card, Button } from 'react-bootstrap';

import Data from "../Data/fantasy.json";


export default function AllTheBooks() {

    return (
      Data.map((el, index) =>(
      <Card className="col-md-4">
      <Card.Img variant="top" src={el.img} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Button variant="primary">Buy</Button>
      </Card.Body>
      </Card>
      )

        
      )
   
    

)
}