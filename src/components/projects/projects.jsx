import React from 'react'
import './projects.css'
import IMG1 from '../../assets/discordbot-picture.png'


const projects = () => {

  return(
    <section id='projects' className='projects'>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <h3>DJ Discord Bot</h3>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <a rel="noopener noreferrer" href="https://github.com/HomHom1/DISCORD-BOT" className='btn' target='_blank'>Github</a>
          <p>Discord bot made with Java only</p>
        </article>

        <article className='portfolio__item'>
          <h3>Project 2</h3>
          <div className='portfolio__item-image'>
            
          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <h3>Project 3</h3>
          <div className='portfolio__item-image'>

          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <h3>Project 4</h3>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <h3>Project 5</h3>
          <div className='portfolio__item-image'>

          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <h3>Project 6</h3>
          <div className='portfolio__item-image'>

          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn' target='_blank'>Github</a>
        </article>

      </div>
    </section>
  )
}



export default projects