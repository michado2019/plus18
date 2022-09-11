import React from 'react'
import './Sides.css'

export default function Sides() {

  return (
    <div className='sidesWrapper'>
        <div className='sidesLeft'>
          <a href='https://github.com/michado2019' target='_blank' rel='noreferrer'>
         <img src='./images/github--icon.png' alt='img' className='sideLeft-icons' />
         </a>
         <a href='https://www.linkedin.com/in/michado2019/' target='_blank' rel='noreferrer'>
         <img src='./images/linked--in_icon.png' alt='img' className='sideLeft-icons' />
        </a>
        <a href='https://twitter.com/Mike_Adeshina' target='_blank' rel='noreferrer'>
         <img src='./images/twitter--icon.png' alt='img' className='sideLeft-icons' />
        </a>
        </div>
        <div className='sidesRight'>
            <div>@</div>
            <div>A</div>
            <div>l</div>
            <div>t</div>
            <div>s</div>
            <div>c</div>
            <div>h</div>
            <div>o</div>
            <div>o</div>
            <div>o</div>
            <div>l</div>
            <br />
            <div>A</div>
            <div>f</div>
            <div>r</div>
            <div>i</div>
            <div>c</div>
            <div>a</div>
        </div>
    </div>
  )
}
