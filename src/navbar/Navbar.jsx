import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='navbarWrapper'>
      <div className='navbarFlex'>
         <h1 className='navbarLogo'>Michado</h1>
         <h2 className='navbarHome'>Home</h2>
         <h2 className='navbarGithub'>Github</h2>
      </div>
    </div>
  )
}
