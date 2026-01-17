import { useState } from 'react'
import '../styles/ImageSlider.css'

function ImageSlider({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) {
    return <div className="slider-container">No images available</div>
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleImageClick = () => {
    handleNext()
  }

  const currentImage = images[currentIndex]

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button className="slider-button prev" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="slider-content">
          <img
            src={currentImage.url}
            alt={currentImage.name}
            className="slider-image"
            onClick={handleImageClick}
          />
          <h2 className="image-name">{currentImage.name}</h2>
        </div>

        <button className="slider-button next" onClick={handleNext}>
          &#10095;
        </button>
      </div>

      <div className="slider-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="slider-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default ImageSlider
