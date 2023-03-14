import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleBlog() {
    const{id} = useParams();
    const [value,setValue] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          setValue(response.data)
        })
    },[])

  return (
    <>

    </>
  )
}

export default SingleBlog