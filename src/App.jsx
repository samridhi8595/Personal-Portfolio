import React from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden bg-black'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/>

      </main>
      
      </div>
  )
}

export default App
