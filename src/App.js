import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PhotoDisplay from './components/photoDisplay/PhotoDisplay'
export default function App() {
  return (
    <div className='appWrapper'>
      <Navbar />
      <PhotoDisplay />
    </div>
  )
}
