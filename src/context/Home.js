import React, { useContext, useEffect} from 'react'
import axios from 'axios';
import { Ecommercecontext } from './App';
import { Link } from 'react-router-dom';

function Home() {
   
  const {data,setData} = useContext(Ecommercecontext)
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
            <h1><Link>{element.title}</Link></h1>
            <h3>{element.body}</h3>
            </div>
        )
      })}
    </>
  )
}

export default Home