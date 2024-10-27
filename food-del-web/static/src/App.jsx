import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-route-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes></Routes>
    </div>
  )
}

export default App