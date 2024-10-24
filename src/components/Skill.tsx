import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div>
          <h2 className='skills-title'>Technologies I Work with</h2>
          <p className='skills-description'>
            I am currently learning HTML, CSS, and TypeScript, and can create responsive websites using these technologies. My goal is to become a Full Stack Web Developer, and I am actively working on enhancing my skills in both frontend and backend development. Currently, I am learning Next.js to further strengthen my knowledge of building modern web applications. I am passionate about coding and eager to explore new tools and frameworks that will help me achieve my full stack development ambitions.
          </p>
        </div>
        <div>
          <div className='skills-list'>
            <div className='skills-column'>
              <h2>Typescript</h2>
              <h2>React.js</h2>
              <h2>Next.js</h2>
            </div>
            <div className='skills-column'>
              <h2>TailwindCSS</h2>
              <h2>CSS</h2>
              <h2>Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
