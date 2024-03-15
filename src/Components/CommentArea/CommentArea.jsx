import React from 'react'
import { useEffect, useState, useCallback} from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';


// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MTA1MzA2MjIsImV4cCI6MTcxMTc0MDIyMn0.NA52twbcCMrpy-DsrMk_Zkfl8VWyLaNCUiSIVr8VX38"
// }
// })

export default function CommentArea() {

    const [result, setResult] = useState([]);

    const apiEndpoint = 'https://striveschool-api.herokuapp.com/api/books/:asin/comments/';



      useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(apiEndpoint,{
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWRjNTljNDM3MDAwMTkzYzM3NDIiLCJpYXQiOjE3MTA1MzA2MjIsImV4cCI6MTcxMTc0MDIyMn0.NA52twbcCMrpy-DsrMk_Zkfl8VWyLaNCUiSIVr8VX38"
                        }
                    });
                const json = await response.json();
                setResult(json);
                // console.log(json);
            } catch (e) {
                console.error(e);
            }
        };
        fetchData();
    }, []);

console.log(result);

  return (
    <div>
        <CommentList 
        data= {result}
        />
        <AddComment />
        
      
    </div>
  )
}
