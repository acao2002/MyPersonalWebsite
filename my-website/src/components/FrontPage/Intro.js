import React from 'react'
import Typed from 'react-typed';

export default function Intro() {
    return (
        <div>
              <section id="hero" class="d-flex flex-column justify-content-center">
                <div class="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Andrew Cao</h1>
                    <p>I'm  <Typed strings={[' Developer ','Engineer','Musician','Chess player']}typeSpeed={60} backSpeed={70} loop/>
                    </p>
                    <div class="social-links">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
