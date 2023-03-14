import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Regisiter from './Regisiter'

function App() {
  return (
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Regisiter />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App