import React from "react";
import SingleComment from "./SingleComment";

export default function CommentList(props) {
  const { data, loadData } = props;
  // console.log(data);
  return (
    <>
      {data.map((item) => (
        <SingleComment
          key={item._id}
          comment={item.comment}
          rate={item.rate}
          id={item._id}
          loadData={loadData}
        />
      ))}
    </>
  );
}
