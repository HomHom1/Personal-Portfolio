import React from 'react'
import './about.css'
import{Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import {Pagination, Navigation} from "swiper";

// import required modules


const data = [
  {
    title: 'Introduction',
    content:'I am a seasoned web developer with expertise in a wide range of client-side and server-side web technologies. I appreciate using technology to express my ideas and coming up with new ways to solve challenges. To broaden my expertise, I am keen to adopt new ideas, approaches, and technology.'
  },
  {
    title: 'Education',
    content:'In May of 2026 I will have graduated with a BS in Computer science + Statistics from the University of Illinois at Urbana Champaign.'
  },
  {
    title:'Tools / Technologies',
    content: 'I have 3 years worth of knowledge in Java, Python, HTML, CSS, and Microsoft Visual Studio Code. I also have only 1 year of knowledge in Javascript, and React'
  }
];



const about = () => {
  return (
    <section id='about' className='about'> 
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <Swiper className='container about__container'
        pagination={{clickable: true}}
        Navigation= {{clickable: true}}
        modules={[Pagination, Navigation]}

    >
      {
        data.map(({title, content}, index) =>{
          return(
              <div className="about__cards">
                <SwiperSlide>
                  <article className ='about__card'>
                    <h5>{title}</h5>
                    <p>{content}</p>
                  </article>
                </SwiperSlide>  
              </div>
          )
        })
      }
    </Swiper>
    </section>
  )
}
export default about