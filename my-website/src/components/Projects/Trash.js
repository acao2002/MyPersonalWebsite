import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class Trash extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/trash.jpg"
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
                        <h1>Intelligent In-house Trash Collector System</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao and Tim Huynh </h3>
                        <p>Technology:  <Typed strings={['Ardunio(IoTs) ','Server Communication','Computer Vision','Machine Learning','Automation','PID control']}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/acao2002/SmartBin-CV-and-Server" target ="blank" class="ptt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                            <a href="https://drive.google.com/file/d/1t47wuzvR15X3JGvWso9eJdDI0sxZgopj/view?usp=sharing" target ="blank"  class="ptt"><i class="icofont-newspaper"></i> <div >Paper/Blog</div></a>
                            <a href="https://drive.google.com/file/d/1t47wuzvR15X3JGvWso9eJdDI0sxZgopj/view?usp=sharing" target ="blank" class="ptt"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>
                            <a href="#" class="ptt"><i class="icofont-key"></i><div > Tutorial </div></a>
                            
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    Ho Chi Minh city, among the top 13 most populated cities in the world, generates nearly 9,000 tons of solid waste daily. A significant part of the problem stems from a lack of garbage-disposal facilities and a lack of environmental awareness in public spaces such as schools, hospitals, and parks. The project “Smart Bin” aims to reduce littering in these areas by building an Internet-of-Things (IoT) system that automatically collects trash from stationary users. The system is purposed to reduce the inconvenience of moving far distances to deposit trash, thereby reducing the rate of littering. A prototype is first designed to cope with a controlled environment and is tested in-door use at the moment due to time and resource constraints, though it can be open to future upgrades.

                    </div>

                </section>

              
                

            </div>
        )
    }
}
