import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
    <h1>Blogs</h1>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>register</Link></li>
    </ul>
    </header>
</>
  )
}

export default Header