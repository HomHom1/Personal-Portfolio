import React from 'react'
import './about.css'

const about = () => {
  return (
    <section id='about' className='about'> 
      <h2>Me</h2>

      <div className="introduction introduction__container">
        <h4>Introduction</h4>
        <span>I am a seasoned web developer with expertise in a wide range of client-side and server-side web technologies. I appreciate using technology to express my ideas and coming up with new ways to solve challenges. To broaden my expertise, I am keen to adopt new ideas, approaches, and technology.</span>
      </div>

      <div className="mybackground mybackground__container">
        <h4>My Background</h4>
        <span>In May of 2026 I will have graduated with a BS in Computer science + Statistics from the University of Illinois at Urbana Champaign.</span>
      </div>

      <div className="technologies technologies__container">
        <h4>Technologies</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Python</li>
          <li>Microsoft Visual Studio</li>
          <li>React.js</li>
        </ul>
      </div>

    </section>
  )
}
export default about