import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddComment(props) {
  const { elementId, loadData } = props;
  const apiEndpoint = "https://striveschool-api.herokuapp.com/api/comments/";

  const [inputComment, setInputComment] = useState("");

  const [inputRate, setInputRate] = useState("");

  const fetchPost = async () => {
    const bodyApi = {
      comment: inputComment,
      rate: inputRate,
      elementId: elementId,
    };

    try {
      await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MTA1MzA2MjIsImV4cCI6MTcxMTc0MDIyMn0.NA52twbcCMrpy-DsrMk_Zkfl8VWyLaNCUiSIVr8VX38",
        },
        body: JSON.stringify(bodyApi),
      });
      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            value={inputComment}
            type="text"
            rows={3}
            onChange={(e) => setInputComment(e.target.value)}
            placeholder="Comment"
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          value={inputRate}
          onChange={(e) => setInputRate(e.target.value)}
        >
          <option>Rating</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
      </Form>
      <Button type="submit" onClick={fetchPost}>
        Send
      </Button>
    </>
  );
}
