import React from 'react'
import Navbar from './components/Shared/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className=' overflow-hidden'>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
