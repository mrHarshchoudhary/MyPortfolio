import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Herp from './components/Hero/Herp'
import About from './components/About/About'
import Services from './components/Servi/Services'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Herp/>
      <About/>
    <Services/>
    <Mywork/>
    <Contact/>
   
    </div>
  )
}

export default App
