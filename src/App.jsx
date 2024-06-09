import './App.css'
import About from './components/About'
import {Nav} from './components/Navbar'
import { Home } from './components/Home'
import Contact from './components/Contact'
import Course from "./components/Course"


function App() {


  return (
    <main className='h-screen '>
      <Nav/>    {/* Navbar */}
    
      <Home/>   {/* Home */}
   
     <div className='bg-gradient-to-t from-white to-green-100'>
     <About/>    {/* About */}

<Course/>
{/* Course */}
<Contact/>
{/* Contact me */}
     </div>
    
    </main>
  )
}

export default App
