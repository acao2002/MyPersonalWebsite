import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class GameDev extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/cocos.png"
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
                
                <section id="hero" class="d-flex flex-column text-center ">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Chocolate Pong</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao</h3>
                        <p>Technology:  <Typed strings={['Cocos Creator','OOP']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/acao2002/Pong" target ="blank" class="ptt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    A simple chocolate-themed pong game that I built as an introduction to game development. 
                    </div>
                    <div>
                        <img
                            class ="text-center mt-4"
                            src="assets/img/arrow.png"
                            style = {{width: '10%', height: '60%', }}
                    />
                    </div>
                </section>
       
            
                
                <section id="hero" class="d-flex flex-column text-center ">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Egg game</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao</h3>
                        <p>Technology:  <Typed strings={['Cocos Creator','Server simulation','Delay handling']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/acao2002/EggGame" class="ptt" target ="blank"><i class="devicon-github-original" ></i><div >Source code</div></a>
                           
                            <a href= "https://sharp-hawking-3302a2.netlify.app/" class="ptt" target ="blank"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>
                            
                      
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    A game where you(player) compete with others to collect as many eggs as possible. The game includes a live leaderboard updating date in realtime, coupled with a server simulation to imitate online gaming environment. Within the server, a delay handling system is implemented to handle lag. Other players follow an AI algorithm to compete against the human player.

                    </div>
                </section>

              
                

            </div>
        )
    }
}
