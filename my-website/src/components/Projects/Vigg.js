import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class Vigg extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/sneaker.jpg"
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
                        <h1>Vigg</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao and Tim Huynh</h3>
                        <p>Technology:  <Typed strings={['React','Bootstrap']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/Vigg-sneakerhead/reactfrontend" target = "blank" class="pt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                            <a href="#" class="ptt"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>  
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    The front-end web application of the Vigg e-commerce start up that I built. Despite only having finished around 90% of it and not merged it with the backend and database, this project gave me plenty of start up experience and web development skills.  

                    </div>
                </section>

              
                

            </div>
        )
    }
}
