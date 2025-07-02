import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

function App() {

  return (
    <div className='flex min-h-screen bg-[#0a0a0a]'>
      <ScrollToTop/>
      <NavBar />
      <div className='flex-1 flex flex-col lg:ml-0'>
        <div className='w-full flex-1 '>
          <div className='w-full'>
            <Outlet/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
