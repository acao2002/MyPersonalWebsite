import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class Snake extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/snake.jpg"
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
                        <h1>Q-Learning Snake</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao</h3>
                        <p>Technology:  <Typed strings={['Pygame','Q-learning','Object-Oriented Programming']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/acao2002/Q-learning-snake-" target = "blank" class="ptt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                            <a href="https://github.com/acao2002/Q-learning-snake-" target = "blank"  class="ptt"><i class="icofont-newspaper"></i> <div >Paper/Blog</div></a>
                            <a href="https://github.com/acao2002/Q-learning-snake-#launch" target = "blank"  class="ptt"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>
                            <a href="/cms" class="ptt"><i class="icofont-key"></i><div > Tutorial </div></a>
                           
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    An AI that learns to play snake using Q learning, a type of Reinforcement Learning. The project evaluates the Q values at different states of the snake and utilizes it to predict the correct movement. Q values are calculated based on the rewards when eating food evading walls or itself.

                    </div>
                </section>

              
                

            </div>
        )
    }
}
