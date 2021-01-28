import React from 'react'
import './Skills.css'

export default function Skills() {
    return (
        <div>
            <section id="skills" class="skills section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Skills</h2>
                    </div>

                    <div class="row skills-content">

                        <div class="col-lg-6">

                            <div>
                                <span class="skill python"><i class ="devicons devicons-python ic"></i>Python <i class="val">100%</i></span>
                                <div class="meter">
	                                <span style={{width: "100%"}}></span>
                                </div>
                            </div>

                            <div class="my-3">
                                <span class="skill html"><i class ="devicons devicons-html5 ic"></i> HTML <i class="val">80%</i></span>
                                <div class="meter">
	                                <span style={{width: "80%"}}></span>
                                </div>
                            </div>

                            <div>
                                <span class="skill ardunio"><img src='/assets/img/ardunio2.png' style = {{width:"6.2%",height: "6.2%"}}></img>Ardunio(C) <i class="val">80%</i></span>
                                <div class="meter">
	                                <span style={{width: "80%"}}></span>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div>
                                <span class="skill css"><i class ="devicons devicons-css3 ic"></i>CSS <i class="val">70%</i></span>
                                <div class="meter">
	                                <span style={{width: "70%"}}></span>
                                </div>
                            </div>

                            <div class="my-3">
                                <span class="skill javascript"><i class ="devicons devicons-javascript ic"></i> Javascript <i class="val">50%</i></span>
                                <div class="meter">
	                                <span style={{width: "50%"}}></span>
                                </div>
                            </div>

                            <div>
                                <span class="skill java"><i class ="devicons devicons-java ic"></i>java <i class="val">80%</i></span>
                                <div class="meter">
	                                <span style={{width: "80%"}}></span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
