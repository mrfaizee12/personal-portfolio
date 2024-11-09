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
            {`Hey there! I'm Faizan Anjum, a bachelor's student with a background in pre-engineering. My journey in tech has led me to software development, where I’m passionate about creating seamless digital experiences. Skilled in frontend, backend, and full-stack development with HTML, CSS, JavaScript, and TypeScript, I'm currently expanding my expertise in Next.js, certified cloud, generative AI, Web 3.0, and the Metaverse. I’m excited to explore the future of tech and bring ideas to life!`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
