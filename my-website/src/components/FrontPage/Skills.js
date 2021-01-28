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
                                <span class="skill python">Python <i class="val">100%</i></span>
                                <div class="meter">
	                                <span style={{width: "100%"}}></span>
                                </div>
                            </div>

                            <div class="my-3">
                                <span class="skill html"> HTML <i class="val">80%</i></span>
                                <div class="meter">
	                                <span style={{width: "80%"}}></span>
                                </div>
                            </div>

                            <div>
                                <span class="skill ardunio">Ardunio(C) <i class="val">80%</i></span>
                                <div class="meter">
	                                <span style={{width: "80%"}}></span>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-6">

                            <div>
                                <span class="skill css">CSS <i class="val">70%</i></span>
                                <div class="meter">
	                                <span style={{width: "70%"}}></span>
                                </div>
                            </div>

                            <div class="my-3">
                                <span class="skill javascript">Javascript <i class="val">50%</i></span>
                                <div class="meter">
	                                <span style={{width: "50%"}}></span>
                                </div>
                            </div>

                            <div>
                                <span class="skill java">java <i class="val">80%</i></span>
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
