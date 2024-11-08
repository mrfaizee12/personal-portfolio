// import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div id="hero">
      <Navbar />
      <div className="hero-container">
        <div className="hide-on-small"></div>
        <div className="large-text">
          <div>
            <p>Hi there!</p>
            <div>
              <p>
                I&#39;m <span className="name">Faizan Anjum</span>
              </p>
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer',
                    'Backend Developer',
                    'Certified Cloud Specialist',
                    'Generative AI Enthusiast',
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: 'typewriter-text', // For custom styling
                }}
              />
            </div>
            <div className="button-container">
              <Link href="#contact" passHref>
                <button className="btn hire-me">Hire Me</button>
              </Link>
              <Link href="https://hackathon-milestones01-02-by-faizee.vercel.app/" passHref>
                <button className="btn view-cv">View CV</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
