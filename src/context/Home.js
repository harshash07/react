import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
   
   const[data,setData] = useState([])

   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response.data);
      setData(response.data)
    });
  }, []);

  return (
    <>
        {data.map((element) => {
        return(
            <div key={element.id}>
            <h1>{element.title}</h1>
            </div>
        )
      })}
    </>
  )
}

export default Home