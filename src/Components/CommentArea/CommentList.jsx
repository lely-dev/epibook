import React from 'react'
import SingleComment from './SingleComment';



export default function CommentList(props) {
  
  const {data} = props;

  return (
    <>
    {data.map((item) =>
    <SingleComment 
    key = {item.elementId}
    comment = {item.comment}
    rate = {item.rate}/>
    )}
    </>
  )
}
