import './routing.css'
import Home from './Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Blog from './Blog'
import Header from './Header'
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/about' element= {<About />} />
            <Route path='/blog' element= {<Blog />} />
            <Route path='/services' element= {<Services />} />
            <Route path='/contact' element= {<Contact />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App