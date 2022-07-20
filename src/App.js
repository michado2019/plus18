
import React from 'react'
import PhotosDataBase from './components/PhotosDataBase';

const name = prompt("Enter your name")

function App() {
  

  const [photos, setPhotos] = React.useState({
    randomImage: "default--image.jpg"
  })
  const [allPhotos, setAllPhotos] = React.useState(PhotosDataBase)

   function getNewPhotos() {
    const allPhotoArray = allPhotos.data.photos
    const randomPhotos = Math.floor(Math.random() * allPhotoArray.length)
    const url = allPhotoArray[randomPhotos].url
    setPhotos(prevState => ({
      ...prevState,
      randomImage: url
    }))
  }

  return (
    <div className="container">
      <div className="header">
        <img
          src="my--profile_pix (2).jpg"
          alt="img"
          className="header--img"
        />
        <h1 className="header--title">Photo Generator</h1>
        <p className="project--name">Photo Generator</p>

      </div>
      <div className="main">
        <p className="main--article">Hello, <span className="main--name">{name}</span><br />
          You are welcome to my simple photo generator. It contains several images. Enjoy your view as you click on the big
          button below
        </p>
      </div>
      <div className='show--case'>
        <button className="button" onClick={getNewPhotos}>
          <div className="button--photo_flex">
            Generate photos
            <img
              src="camera--img.png"
              alt="img"
              className="button--img"
            />
          </div>
        </button>
        <img src={photos.randomImage} alt="img" className="default--photo" />

      </div>
      <div className='social'>
        <a href='https://twitter.com/Mike_Adeshina' target="_blank" rel='noreferrer'>
          <img src='twitter--icon.png' alt='img' className='social--img' />
        </a>
        <a href='https://github.com/michado2019' target="_blank" rel='noreferrer'>
          <img src='github--icon.png' alt='img' className='social--img' />
        </a>
        <a href='https://www.linkedin.com/in/adeshina-obafemi-a14045238/' target="_blank" rel='noreferrer'>
          <img src='linked--in_icon.png' alt='img' className='social--img' />
        </a>
      </div>
      <footer className='footer'>
        <p className='copyright'> &copy;Michael Adeshina 2022</p>
      </footer>
    </div>
  );
}

export default App;