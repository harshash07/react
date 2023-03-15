import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import Regisiter from './Regisiter'
import './context.css'

 export const Ecommercecontext = createContext(null)
function App() {

  const[data,setData] = useState([])
  const [form,setForm] = useState({})
  return (
    <Ecommercecontext.Provider value={{data,setData,form,setForm}}>
    <BrowserRouter>
    <Header/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Regisiter />} />
        </Routes>
    </BrowserRouter>
    </Ecommercecontext.Provider>
  )
}

export default App