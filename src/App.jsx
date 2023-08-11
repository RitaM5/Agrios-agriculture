import React from 'react'
import Navbar from './components/Shared/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Shared/Footer'

function App() {

  return (
    <div className=' overflow-hidden'>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
