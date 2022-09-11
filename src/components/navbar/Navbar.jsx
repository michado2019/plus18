import React from 'react'
import './Navbar.css'


export default function Navbar() {
  return (
    <div className='navbarWrapper'>
      <div className='navbarFlex'>
      <h1 className='navbarLogo'><a href='index.html'>Michado</a></h1>
        <a href='index.html'><h2 className='navbarHome'>Home</h2></a>
        <a href='https://github.com/michado2019' target='_blank' rel= 'noreferrer' ><h2 className='navbarGithub'>Github</h2></a>
      </div>
    </div>
  )
}
