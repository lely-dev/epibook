import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SingleComment(props) {
  const { comment, rate, id, loadData } = props;
  // console.log(id);

  const apiEndpoint = `https://striveschool-api.herokuapp.com/api/comments/${id}`;

  //DELETE COMMENT

  const deleteComment = async () => {
    try {
      const response = await fetch(apiEndpoint, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MTA1MzA2MjIsImV4cCI6MTcxMTc0MDIyMn0.NA52twbcCMrpy-DsrMk_Zkfl8VWyLaNCUiSIVr8VX38",
        },
      });

      loadData();
    } catch (error) {
      console.log(error);
    }
  };

  //MODIFY COMMENT

  // STELLE

  return (
    <>
      <ListGroup border-bottom>
        <div>
          <div>{comment}</div>
          <div>{rate}</div>
          <div>
            <FontAwesomeIcon icon={faStar} />
          </div>
        </div>
        <div>
          <Button onClick={deleteComment}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button>
            <FontAwesomeIcon icon={faPen} />
          </Button>
        </div>
      </ListGroup>
    </>
  );
}
