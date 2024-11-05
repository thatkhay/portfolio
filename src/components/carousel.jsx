// components/Slider.jsx
import React, { useState } from 'react';

const Slider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const sliderContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    overflow: 'hidden',
  };

  const sliderWrapperStyle = {
    display: 'flex',
    transform: `translateX(-${currentIndex * 100}%)`,
    transition: 'transform 0.5s ease',
  };

  const slideStyle = {
    minWidth: '100%',
    boxSizing: 'border-box',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const projectImageStyle = {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '16px',
  };

  const projectContentStyle = {
    textAlign: 'center',
    color: 'white',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '24px',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    padding: '8px',
  };

  return (
    <div style={sliderContainerStyle}>
      <div style={sliderWrapperStyle}>
        {projects.map((project, index) => (
          <div key={index} style={slideStyle}>
            <img
              src={project.imageUrl}
              alt={project.title}
              style={projectImageStyle}
            />
            <div style={projectContentStyle}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
                {project.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPreviousSlide}
        style={{ ...buttonStyle, left: '16px' }}
      >
        ‹
      </button>
      <button
        onClick={goToNextSlide}
        style={{ ...buttonStyle, right: '16px' }}
      >
        ›
      </button>
    </div>
  );
};

export default Slider;
