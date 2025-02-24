import React from 'react'
import './style.css';

function Background() {
  return (
    <>
         <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src="/video/bg-vdo.mp4" type="video/mp4" />
        
      </video>
    </div>
    </>
  )
}

export default Background