import React from 'react'
import './projects.css'
import IMG1 from '../../assets/discordbot-picture.png'


const projects = () => {

  return(
    <section id='projects' className='projects'>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <h3>Advanced Discord Bot</h3>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <div className='content'>
              <div className='buttons'>
                <a rel="noopener noreferrer" href="https://github.com/HomHom1/discordBotPython" className='btn' target='_blank'>Github</a>
                <a rel='noopener noreferrer' href='https://discord.com/api/oauth2/authorize?client_id=533477025449771031&permissions=8&scope=bot' className='btn-primary' target='_blank'>Test</a>
              </div>
            <p>Discord bot made with primarily DiscordPy</p>
            <p>(Hit the test button to try me out in your own discord server!)</p>

          </div>
        </article>

        <article className='portfolio__item'>
          <h3>Project 2</h3>
          <div className='portfolio__item-image'>
            
          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <h3>Project 3</h3>
          <div className='portfolio__item-image'>

          </div>
          <a href="https://github.com" rel="noopener noreferrer" className='btn-primary' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}



export default projects