import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class Voice extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/voice.jpg"
                    style={{"position":"fixed", objectFit:'cover', height: '100%', width: '100%', opacity:'50%'}}
                />
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

              
                <header id="header" class="d-flex flex-column justify-content-center">

                    <nav class="nav-menu">
                            <ul>
                            <li class="active"><a href="/"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            </ul>
                    </nav>
                

                </header> 
                
                <section id="hero" class="d-flex flex-column text-center">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Logix - Voice Assistant</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao</h3>
                        <p>Technology:  <Typed strings={['Speech Recognition','Webscraping','Automation', 'Object-Oriented Programming']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/acao2002/Personal-laptop-voice-assitance-using-Python" target = "blank" class="ptt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                            <a href="https://devpost.com/software/personal-laptop-voice-assitance-using-python" target = "blank"  class="ptt"><i class="icofont-newspaper"></i> <div >Paper/Blog</div></a>
                            <a href="https://www.youtube.com/watch?v=rzGFCqpxV2k" target = "blank"  class="ptt"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>
                            <a href="/cms" class="ptt"><i class="icofont-key"></i><div > Tutorial </div></a>
                         
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    As a student, a gamer, and a coder at the same time, I usually multitask a lot on my computer, which means leaving tons of tabs and apps open. Nevertheless, doing that would hurt my computer since I never turn them off to save time. To maximize the efficiency of my multitasking, I figure a personal voice assistant like Siri which opens and closes apps/tabs would be very convenient.

                    </div>
                </section>

              
                

            </div>
        )
    }
}
