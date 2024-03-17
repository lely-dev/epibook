import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';

export default function AddComment(props) {

    const {elementId}= props;
    const apiEndpoint = 'https://striveschool-api.herokuapp.com/api/comments/';

    

    const [inputComment, setInputComment] = useState("");

    const [inputRate, setInputRate] = useState('');


  function fetchPost() {
        
    

    fetch(apiEndpoint + elementId, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MTA1MzA2MjIsImV4cCI6MTcxMTc0MDIyMn0.NA52twbcCMrpy-DsrMk_Zkfl8VWyLaNCUiSIVr8VX38"
                },
        body: JSON.stringify({
            comment: {inputComment}, rate:{inputRate}, elementId:{elementId} 
        })
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            // Handle data
         })
         .catch((err) => {
            console.log(err.message);
         });

        // try {
        //     const response = fetch(apiEndpoint,{
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MTA1MzA2MjIsImV4cCI6MTcxMTc0MDIyMn0.NA52twbcCMrpy-DsrMk_Zkfl8VWyLaNCUiSIVr8VX38"
        //             },
        //         body: JSON.stringify({ comment: {inputComment}, rate:{inputRate}, elementId:{elementId} })
        //         });
        //     const json = response.json();
        //     const data = console.log(data);
        // } catch (e) {
        //     console.error(e);
        // }
    };



  return (
    <>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control value={inputComment} type='text' rows={3} onChange={(e) => setInputComment(e.target.value)} />
            </Form.Group>
            <Form.Select aria-label="Default select example" value={inputRate} onChange={(e)=> setInputRate(e.target.value)}>
                <option>Rating</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="4">Four</option>
                <option value="5">Five</option>
            </Form.Select>
        </Form>
        <Button type='submit'
            onClick={fetchPost}>
            Send
        </Button>
    </>
  )
}
