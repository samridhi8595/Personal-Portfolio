import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"


const App = () => {
  return (
    <div className='bg-[#0f172a] text-white overflow-hidden'>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>

      </div>
  )
}

export default App
