import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class Chatbot extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/physio.png"
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
                
                <section id="hero" class="d-flex flex-column text-center mt-5">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>PhysioCare</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao and Quoc Anh Ngo </h3>
                        <p>Technology:  <Typed strings={['Ardunio(IoTs) ','Linear Actuators','Web interface','Automation']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="#" class="ptt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                            <a href="#" class="ptt"><i class="icofont-newspaper"></i> <div >Paper/Blog</div></a>
                            <a href="#" class="ptt"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>
                            <a href="#" class="ptt"><i class="icofont-key"></i><div > Tutorial </div></a>
                            <a href="#" class="ptt"><i class="icofont-key"></i><div > Tutorial </div></a>
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    Curing paralysis is a question frequently asked. In paralysis recovery, treatment is built around the neuroplasticity function of the brain - the ability to heal and make physiological as the result of interactions with the environment.
Recovery is normally built around rehabilitative exercises, or physiotherapy, lasting from 3 to 9 months. In physiotherapy, stretching actions are performed on patients’ limbs for prolonged periods of time (1-1.5 hours) to stimulate neuroplasticity. These therapy sessions stimulate neurons to form new connections, which enables patients to regain control of their limbs. 

                    </div>
                </section>

              
                

            </div>
        )
    }
}
