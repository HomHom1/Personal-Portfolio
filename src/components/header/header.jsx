import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './header_socials'

const header = () => {
  return (
    <header>
        <div className="container header__container">
          <h4>Hello I'm</h4>
          <h1>Homen Homa</h1>
          <h4>UI/UX Designer</h4>
          <h4>Full Stack Developer</h4>
          <CTA/>
          <HeaderSocials/>
          <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header