import React, { useState, useEffect } from 'react'
import './PhotoDisplay.css'
import { scaryPhotosDatabase } from '../../ScaryPhotosDatabase'


export default function PhotoDisplay() {

  const [currentPosition, setCurrentPosition] = useState(0)
  const [photos, setPhotos] = useState(null)
  const [loading, setLoading] = useState(true)
  const [listItems, setListItems] = useState([])

  //Set use effect....
  useEffect(() => {
    const photosList = scaryPhotosDatabase
    const item = photosList[currentPosition]

  //Set states
    setPhotos(item)
    setLoading(false)
    setListItems(photosList)
  }, [currentPosition])

  //Handle Next 
  const handleNext = (event) => {
    event.preventDefault();

  //Update state
    const length = listItems.length
    const count = length - 1
    if (currentPosition < count) {
      setCurrentPosition((prev => prev + 1))
    } else {
      setCurrentPosition(0)
    }
  }

  const handlePrev = (event) => {
    event.preventDefault();

  //Update state
    if (currentPosition > 0) {
      setCurrentPosition(prev => prev - 1)
    } else {
      setCurrentPosition(0)
    }
  }

  return (
    <div className='photoDisplay-wrapper'>
      <p className='photoDisplay-app_name'>Plus18 App</p>
      <div className='photoDisplay-flex'>
        <h1 className='photoDisplay-title'>Plus18 Photos</h1>
        <div>{loading ? (<div>loading</div>) : (
          <div className='photosDisplay-photos'>
            <img src={photos.img} alt='img' className='photoDisplay-img' />
            <div className='photosDisplay-number'>{photos.number}</div>
          </div>
        )}
        </div>
        <div className='photoDisplay-btn_div'>
          <button className='photoDisplay-btn' onClick={handlePrev}>Prev</button>
          <button className='photoDisplay-enjoy_btn' disabled>Enjoy your view!</button>
          <button className='photoDisplay-btn' onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}
