import { Element } from 'react-scroll'
import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import Project from './Projects'

const Hero = () => {
  return (

    <div>
      <Element id="home">
        <Home />
      </Element >
      <Element id="about">
        <About />
      </Element >
      <Element id="skills">
        <Skills />
      </Element >
      <Element id="projects">
        <Project />
      </Element >
      <Element id="contact">
        <Contact />
      </Element >

    </div>


  )
}

export default Hero