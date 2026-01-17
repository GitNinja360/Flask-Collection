import { useState } from 'react'
import '../styles/GalleryGrid.css'

function GalleryGrid({ images = [] }) {
  const [selectedFlask, setSelectedFlask] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (images.length === 0) {
    return <div className="gallery-container">No images available</div>
  }

  const handleFlaskClick = (flask) => {
    setSelectedFlask(flask)
    setCurrentImageIndex(0)
  }

  const handleNextImage = () => {
    if (selectedFlask && selectedFlask.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedFlask.images.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedFlask && selectedFlask.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedFlask.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((flask, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => handleFlaskClick(flask)}
            >
              <img
                src={flask.images[0]}
                alt={flask.name}
                className="gallery-image"
              />
              <div className="image-overlay">
                <p className="image-label">{flask.name}</p>
                {flask.images.length > 1 && (
                  <span className="image-count">+{flask.images.length - 1}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedFlask && (
        <div className="modal" onClick={() => setSelectedFlask(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedFlask(null)}
            >
              ✕
            </button>

            <div className="modal-main">
              <img
                src={selectedFlask.images[currentImageIndex]}
                alt={selectedFlask.name}
              />
              {selectedFlask.images.length > 1 && (
                <div className="modal-controls">
                  <button className="nav-button" onClick={handlePrevImage}>
                    &#10094;
                  </button>
                  <span className="image-counter">
                    {currentImageIndex + 1} / {selectedFlask.images.length}
                  </span>
                  <button className="nav-button" onClick={handleNextImage}>
                    &#10095;
                  </button>
                </div>
              )}
            </div>

            <h2>{selectedFlask.name}</h2>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryGrid
