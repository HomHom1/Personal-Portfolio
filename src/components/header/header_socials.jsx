import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsDiscord} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'

const header_socials = () => {
  return (
    <div className="header_socials">
      <a href='https://github.com' rel="noopener noreferrer" target="_blank"><BsGithub/></a>
      <a href='https://dribbble.com' rel="noopener noreferrer" target="_blank"><BsDribbble/></a>
      <a href='https://discord.com' rel="noopener noreferrer" target="_blank"><BsDiscord/></a>
    </div>  
    )
}

export default header_socials