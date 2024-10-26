import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className="about-image">
          <Image src="/profile.jpg" alt="About Faizan Anjum" width={300} height={300} />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am Faizan Anjum, a bachelor&#39;s degree student. I completed my FSc in pre-engineering, and currently, I am learning about certified cloud, applied generative AI, Web 3.0, and the Metaverse.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
