import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PhotoDisplay from './components/photoDisplay/PhotoDisplay'
import Sides from './components/sides/Sides'
import Footer from './components/footer/Footer'

export default function App() {
  const [birthYear, setBirthYear] = useState('')
  const [submit, setSubmit] = useState('')
  const [display, setDisplay] = useState('')

  const handleChange = (event) => {
    setBirthYear(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmit(birthYear)
    if (birthYear > 2004 || birthYear === '') {
      document.querySelector('.appNotQualify').innerText = 'You are not qualify to view this content!';
      return;
    }
    setDisplay(
      (submit > 2004) ? '' : <PhotoDisplay />
    )
  }

  return (
    <div className='appWrapper'>
      <Navbar />
      {display ? '' :
        <div className='appNotQualify'></div>
      }
      {display}
      <div>
        {display ? '' :
          <form className='appFlex'>
            <span className='appBirth-year'>Birth Year:</span>
            <input type='number' placeholder='Enter year of birth to unlock' className='appBirth-input' onChange={handleChange} />
            <button className='appSubmit-btn' onClick={handleSubmit}>Submit</button>
          </form>}
      </div>
      <div>{display ?
        <Sides /> : ''
      }</div>
      <Footer />
    </div>
  )
}