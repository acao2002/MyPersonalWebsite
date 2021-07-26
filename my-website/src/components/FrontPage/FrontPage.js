import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import About from './About'
import Facts from './Facts'
import Skills from './Skills'
import Projects from './Projects'
import Organizations from './Organizations'
import Music from './Music'
import Contact from './Contact'
import CP from './CP'
import TradeBot from './TradeBot'

export default function FrontPAge() {
    return (
        <div>
          <Navbar/>
          <Intro/>
          <About/>
          <Facts/>
          <Skills/>
          <CP/>
          <Projects/>
          <TradeBot/>
          <Organizations/>
          <Music/>
          <Contact/>
        </div>
    
    )
}
