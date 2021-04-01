import React from 'react'
import './About.css';

export default function About() {
    return (
        <div>
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>About</h2>
                        <p class = "intext">“No single thing is perfect by itself. That’s why we’re born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts besides us.” – Itachi Uchiha</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <img src="assets/img/anhan3.jpg" class="img-fluid" alt=""style={{height: '100%', width: '100%',}}/>
                        </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Computer Science Student &amp; Aspiring Engineer</h3>
                            <p class="font-italic intext">
                                Hi everyone, I am Andrew Cao. Nice to see you here!
                            </p>
                        <div class="row">
                            <div class="col-lg-6 intext">
                                <ul>
                                    <li><i class="icofont-rounded-right"></i> <strong>Birthday:</strong> 12 July 2002</li>
                                    <li><i class="icofont-rounded-right"></i> <strong>Website:</strong> www.andrewxcao.com</li>
                                    <li><i class="icofont-rounded-right"></i> <strong>Phone:</strong> +84 961 830 767(Vietnam)
                                    </li>
                                    <li className ="tab">   +857 399 5530(US)
                                    </li>
                                    <li><i class="icofont-rounded-right"></i> <strong>City:</strong> &nbsp;&nbsp;&nbsp;&nbsp; Nashville, TN</li>
                                </ul>
                        </div>
                        <div class="col-lg-6 intext">
                            <ul>
                                <li><i class="icofont-rounded-right"></i> <strong>Age:</strong> 19</li>
                                <li><i class="icofont-rounded-right"></i> <strong>Education:</strong> Vanderbilt University 2024</li>
                                <li className ="tab2">   The MacDuffie School 2020</li>
                                <li className ="tab2">   Tran Dai Nghia 2017 </li>
                                <li><i class="icofont-rounded-right"></i> <strong>Email:</strong> xuanan12072002@gmail.com</li>
                            </ul>
                        </div>
                            </div>
                                <p class ="intext">
                                    I fell in love with Tech very early in life. As a kid, I spent more time unscrewing my toys and reassembling them than actually playing them. During middle school, I have been participating at local science fairs and exposing myself to coding and IoTs(Ardunio) technology. Since then, I have been nurturing my love for technologies through founding my robotics team in high school, building complex embedded systems, or making all sorts of coding projects ranging from simple object oriented Applications to advanced topics such as Computer Vision, Machine Learning, Reinforcement Learning, Web Developement, etc. Besides CS and Engineering, I also have a strong passion for music, chess, and outdoor activities!. I am eager to share my work and my endeavours with you via this website and I hope you enjoy learning about me! 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>  
        </div>
    )
}
