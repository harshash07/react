import React, { useState } from 'react'

function Login() {

  const[userName,setUserName] = useState('')
  const[password,setPassword] = useState('')

  function handleOnSubmit(e){
  e.preventDefault()
  const storeData = JSON.parse(localStorage.getItem('userdetails'))
  if(storeData.userdetails.user === userName && storeData.userdetails.password === password){
    alert(`welcome${storeData.userdetails.user}`)
  }
  else{
    alert('Invalid Credentials')
  }
  }
  
  return (
   <>
   <div className='login-page'>
   <form onSubmit={handleOnSubmit}>
      <div>
        <input type='text' placeholder='Enter Your userName' value={userName} onChange={(e)=>setUserName(e.target.value)} />
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

export default Login