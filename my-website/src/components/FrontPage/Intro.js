import React from 'react'
import Typed from 'react-typed';
import ImgShow from './ImgShow';
import "./Intro.css"

export default function Intro() {
    
    return (
        <div>
            <ImgShow/>
            <section id="hero" class="d-flex flex-column justify-content-center">
                <div class="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Andrew Cao</h1>
                    <p>I'm  <Typed strings={[' Developer ','Engineer','Musician','Chess player']}typeSpeed={60} backSpeed={70} loop/>
                    </p>
                    <div className ="outer">
                    
                        <a href = "/cv/andrewcv.docx">
                            <div class="button">
                                <div class="text">Download Resume</div>
                            </div>
                        </a>
                    </div>
    
 

                    <div class="social-links">
                        <a href="https://github.com/acao2002" target ="blank" className="twitter"><i class="bx bxl-github"></i></a>
                        <a href="https://www.linkedin.com/in/an-cao-2a136320a/" target = "blank" className="linkedin"><i class="bx bxl-linkedin"></i></a>
                        <a href="https://www.instagram.com/andrill.02/" target ="blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
