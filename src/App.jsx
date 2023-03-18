import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="block App font-page">
      <header className="flex App-header">
      <ul className="socials list">
        <li className="list-item left"><a href="https://github.com/GemAfaWell/"><img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" /></a></li>
        <li className="list-item left"><a href="https://www.linkedin.com/in/GemAfaWell/"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedIn" /></a></li>
      </ul>
        <div className="align-center hero">
          <h1><a href="https://gemafawell.dev/">Gemini Powell</a></h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <ul className="socials list">
          <li className="list-item right"><a href="https://twitter.com/GemAfaWell"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" /></a></li>
          <li className="list-item right"><a href="mailto:gemini@gemafawell.dev"><img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" /></a></li>
        </ul>
      </header>
      <div className="intro">
        <p>Hi, I'm Gemini. I'm a full stack software engineer with a passion for creating beautiful, functional websites and progressive web apps using the JavaScript MERN stack. I'm looking to utilize my services at a company with global reach.</p>
      </div>
      
      <main className="align-center">
        
        <div className="experience">
          <h3>Experience</h3>
        </div>
        <ul className="jobs">
          <div className="job">
            <h4>Software Engineer @ 100Devs, Remote</h4>
            <p>November 2022 - Present</p>
            <p>Achievements:</p>
            <ul className="list">
              <li>Collaborated with cross-functional teams to design, develop, and deploy software applications</li>
              <li>Managed code base and version control using Git/GitHub/Glitch/CodePen and performed code reviews for other team members</li>
              <li>Worked with front-end development team to implement web-based interfaces using HTML, CSS, JavaScript, and the MERN stack</li>
              <li>Participated in code reviews, code exercises via CodeWars, and provided technical guidance to other team members</li>
              <li>Worked with back-end development team to implement RESTful APIs using Node.js, Express, and MongoDB</li>
              <li>Worked with UX/UI team to implement user interfaces using React, Tailwind CSS, and Bootstrap</li>
              <li>Worked with DevOps team to implement continuous integration and deployment using Vite, Netlify, and Heroku</li>
            </ul>
            <p>Projects:</p>
            <ul className="list">
              <li><a href="https://gemafawell.github.io/Southside-Barbers/">Southside Barbers - A Mobile Salon</a></li>
              <li><a href="https://gemafawell-pokedex-clone.netlify.app">Pok&eacute;dex Clone</a></li>
              <li><a href="https://gemafawell.dev">Portfolio Website</a></li>
            </ul>
          </div>
          <div className="job">
            <h4>Frontend Developer and Founder @ <a href="https://www.texaswebgems.com/">Texas WebGems</a>, Austin, TX</h4>
            <p>August 2022 - Present</p>
            <p>Achievements:</p>
            <ul className="list">
              <li>Built and maintained landing pages and other SPAs/MPAs</li>
              <li>Developed and maintained web-based applications using HTML/CSS, Bootstrap, Tailwind CSS, JavaScript</li>
              <li>Updated web apps with the latest technologies (React and Tailwind CSS)</li>
              <li>Participated in agile development processes</li>
            </ul>
            <p>Projects:</p>
            <ul className="list">
              <li><a href="https://www.texaswebgems.com/">Texas WebGems</a></li>
            </ul>
          </div>
          <div className="job">
            <h4>Sales Development Specialist @ <a href="https://www.insiderealestate.com/">Inside Real Estate</a>, Remote</h4>
            <p>August 2022 - Present</p>
            <p>Achievements:</p>
            <ul className="list">
              <li>Increased appointments set by 50% month-over-month (January and February 2023)</li>
              <li>Achieved 100% of appointment quota (December 2022)</li>
            </ul>
            <p>Tech Stack:</p>
            <ul className="list">
              <li>Salesforce Lightning</li>
              <li>Outreach.io</li>
              <li>Google Suite</li>
              <li>Slack</li>
              <li>Zoom</li>
            </ul>
          </div>
        </ul>
        <div className="education">
          <h3>Education</h3>
        </div>
        <ul className="schools">
          <div className="school">
            <p>100Devs Academy, Remote</p>
            <p>Major: Full Stack Web Development</p>
            <p>Graduation: 2023</p>
          </div>
          <div className="school">
            <p>University of the People, Remote</p>
            <p>Major: Computer Science</p>
            <p>Graduation: 2025</p>
          </div>
        </ul>


      </main>
      <aside className="align-center">
        <h3>Skills</h3>
        <ul className="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Vite</li>
          <li>RESTful APIs</li>
          <li>Netlify</li>
          <li>GitHub</li>
          <li>Git</li>
        </ul>
      </aside>
      <footer className="align-center">
        <p>&copy; 2023 <a href="https://gemafawell.dev">Gemini Powell</a> and <a href="https://www.texaswebgems.com/">Texas WebGems</a></p>
        <p>Built with Vite + React</p>
      </footer>
    </div>
  )
};
export default App;
