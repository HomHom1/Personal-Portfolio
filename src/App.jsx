import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/header'
import Contact from './components/contact/Contact'
import Projects from './components/projects/projects'
import About from './components/about/about'

const App = () => {
  return (
    <>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Contact />
    </>
  )
}

export default App