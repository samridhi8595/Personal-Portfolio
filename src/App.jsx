import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"


const App = () => {
  return (
    <div className='bg-[#0f172a] text-white overflow-hidden'>
     <Navbar/>
     <Hero/>
     <About/>

      </div>
  )
}

export default App
