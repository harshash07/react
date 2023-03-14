import { useState, useEffect } from "react"
import axios from "axios"

function Blog() {
    const [value,setValue] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
        setValue(response.data)
        console.log(response.data)
        })
    },[])
  return (
    <>
     {
        value.map((item) => {
            return(
                <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                </div>
            )
        })
     }
    </>
  )
}

export default Blog