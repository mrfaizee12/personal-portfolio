import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id='hero'>
        <Navbar/>
      <div className='hero-container'>
        <div className='hide-on-small'></div>
        <div className='large-text'>
          <div>
            <p>I'm</p>
            <p>Faizan</p>
            <p>Anjum</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;