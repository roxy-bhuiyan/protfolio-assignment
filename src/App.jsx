import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Pages/Home/Home'
import WorkProcess from './Components/WorkProcess/WorkProcess'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import ContactForm from './Components/ContactForm/ContactForm'
import Footer from './Components/Footer/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Home/>
    <WorkProcess/>
    <Projects/>
    <About/>
    <ContactForm/>
    <Footer/>

    </>
  )
}

export default App
