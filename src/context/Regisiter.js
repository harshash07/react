import React, { useContext, useEffect, useState } from 'react'
import { Ecommercecontext } from './App'

function Regisiter() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [user,setUser] = useState('')
  const [password,setPassword] = useState('')
  const {form,setForm} = useContext(Ecommercecontext)
  useEffect(() => {
    localStorage.setItem("userdetails",JSON.stringify(form))
  },[form])
  function handleSubmit(e){
    e.preventDefault()
    console.log(name,email,password)
    const userdetails = {
      name:name,
      email:email,
      user:user,
      password:password
    }
    setForm({...form,userdetails})
  }
  console.log(handleSubmit)
  return (
    <>
     <div className='register-page'>
     <form onSubmit={handleSubmit}>
      <div>
        <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
       <div>
       <input type='email' placeholder='Enter Your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
       </div>
        <div>
        <input type='text' placeholder='Enter Your userName' value={user} onChange={(e)=>setUser(e.target.value)} />
        </div>
        <div>
        <input type='password' placeholder='Enter Your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
     </div>
    </>
  )
}

export default Regisiter