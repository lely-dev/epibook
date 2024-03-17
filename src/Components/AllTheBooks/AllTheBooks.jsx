import React from "react";
import "./AllTheBooks.css";
import { Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import Data from "../Data/fantasy.json";
import SingleBook from "../SingleBook/SingleBook";


export default function AllTheBooks() {

  const [inputTitle, setInputTitle] = useState("");
  const [books, setBooks] = useState(Data);
 

 function lookForBook(e){
    setInputTitle(e);
    let filteredBooks = Data.filter((book) =>
    book.title.toLowerCase().includes(inputTitle.toLowerCase()));
    setBooks(filteredBooks);
  }
  


    return (
      <>
      <div className="container-fluid">
          <Form>
              <Row>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>Books</Form.Label>
                  <Form.Control
                    value={inputTitle}
                    type="text"
                    placeholder="Search"
                    onChange={(e) => lookForBook(e.target.value)}
                    />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
              
          </Form>
      </div>
      
      
      <div className='row' id='books-list'>
       { books.map((el) =>(
        <SingleBook 
        key= {el.asin}
        title={el.title}
        img= {el.img}
        elementId={el.asin}
        />

        ))}
          
      </div>


      </>
      )
   
  
}