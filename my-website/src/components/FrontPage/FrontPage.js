import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Facts from './Facts'
import Skills from './Skills'
import Projects from './Projects'

export default function FrontPAge() {
    return (
        <div>
          <Navbar/>
          <Intro/>
          <About/>
          <Facts/>
          <Skills/>
          <Projects/>
        </div>
    
    )
}
