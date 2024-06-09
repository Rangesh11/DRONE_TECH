import './App.css'
import About from './components/About'
import {Nav} from './components/Navbar'
import { Home } from './components/Home'



function App() {


  return (
    <main className='h-screen '>
      <Nav/>    {/* Navbar */}
    
      <Home/>   {/* Home */}
   
      <About/>    {/* About */}

      {/* Course */}

      {/* Contact me */}
    
    </main>
  )
}

export default App
