import React from 'react'
import './nav.css'

const Nav = () => {
    return (
    <nav>
          <a href='/#' className='btn-primary btn_home'>Home</a>
          <a href='#about' className='btn-primary btn_aboutme'>About Me</a>      
          <a href='#projects' className='btn-primary btn_projects'>Projects</a>
    </nav>
    )
}

export default Nav