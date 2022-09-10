import React from 'react'
import './PhotoDisplay.css'

export default function PhotoDisplay() {
  const time = new Date().getHours()+ ':' + new Date().getMinutes()
  console.log(time)
  return (
    <div className='photoDisplay-wrapper'>
      <div className='photoDisplay-flex'>
        <h1 className='photoDisplay-title'>Plus18 Photos</h1>
        <img src='./images/my--profile_pix (2).jpg' alt='img' className='photoDisplay-img' />
      </div>
      <div className='photoDisplay-btn_div'>
        <button className='photoDisplay-btn'>Prev</button>
        <button className='photoDisplay-enjoy_btn' disabled>Enjoy your view!</button>
        <button className='photoDisplay-btn'>Next</button>
      </div>
    </div>
  )
}
