import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import '../Projects/Project.css';
import { Player } from 'video-react';


export default class Organization extends Component {
    render() {
        return (
            
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/robotics.jpg"
                    style={{"position":"absolute", objectFit:'cover', height: '100%', width: '100%', opacity:'30%'}}
                />
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

              
                <header id="header" class="d-flex flex-column justify-content-center">

                    <nav class="nav-menu">
                            <ul>
                            <li class="active"><a href="/"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            </ul>
                    </nav>
                

                </header> 

                <section id="hero" class="d-flex flex-column text-center mb-0">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>First Tech Challenge - Team 15093</h1>
                        <h1 className ="my-3">FRC - Team 7259</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>The MacDuffie School</h3>
                        <div class="social-links text-center mx-auto">
                           <a href="https://ftc-events.firstinspires.org/2019/team/15093#MACHAMP" target="_blank"  class="ptt"><i class="icofont-newspaper"></i> <div >Associated Page</div></a>
                           <a href ="https://www.youtube.com/watch?v=rCXxXdVDFyQ" target ="blank" class="ptt"><i class="icofont-ui-video-chat"></i><div >Our 2021 Robot </div></a>
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    "This experience and the lessons from my Robotics family will inspire my future engineering endeavors, reaffirming my belief in trust, dialogue, and teamwork – key ingredients to scientific innovation and life."
                    
                    - Andrew Cao 


                    </div>
                
                
                </section>


                <div className ="container my-5">
                    <div class="section-title mb-5">
                        <h3>Hightlights</h3>
                    </div>
                   
                </div>
                 <div className = "container my-3" style = {{color: 'white'}}>
                    <img 
                        className ="mb-3"
                        src="assets/img/r3.jpg"
                        style={{ objectFit:'cover', height: '100%', width: '100%',}}
                    />
                    <p className ='text-center my-3'>
                    “This can’t be happening!” I screamed in disbelief when our team’s robot halted in the middle of a game field during the FIRST Robotics Competition. 

“What an embarrassment! Our school and sponsors will never let us compete again after this,” Adrian exclaimed in anguish.

As tensions ran high, Mr. Greene, our advisor intervened. “Stop squabbling and find a solution! We are in this together!”

Mr. Greene was right. This was not the time to lay blame or give up. With his words, my mind drifted to our club’s beginnings…

                    </p>
                  

                </div>
                <div className = "container my-3" style = {{color: 'white'}}>
                    <img 
                        className ="mb-3"
                        src="assets/img/r2.jpg"
                        style={{ objectFit:'cover', height: '100%', width: '100%',}}
                    />
                    <p className ='text-center my-3'>
                    In the 6 months leading to the competition, a group of 15 individuals had worked arduously to launch MacDuffie School’s first robotics club. Before we could even think of tackling the challenges ahead, we had to learn to work together. Coming from 7 different countries, this was not easy, but our shared passion for science bridged our cultural differences. Under Mr. Greene’s guidance, we created a trusting and respectful environment that empowered us to bring forth our best ideas and resolve any disagreements that surfaced. These principles shaped everything we did – from securing our budget and establishing our charter to competing in FIRST Robotics.
                    </p>
                    

                </div>
                <div className = "container my-3" style = {{color: 'white'}}>
                    <img 
                        className ="mb-3"
                        src="assets/img/r1.jpg"
                        style={{ objectFit:'cover', height: '100%', width: '100%',}}
                    />
                    <p className ='text-center my-3'>
                    When we first realized that our funding needs exceeded the school’s approved budget, we did not give up. Instead, we teamed-up and evaluated different possibilities together, ultimately deciding to find an outside sponsor. As co-founder, I divided the group in two to expedite the process. One group would research and compile a list of sponsors while the other crafted letters and informational materials that we could send out. When we secured a $4,000 grant, we recognized that this was possible thanks to our perseverance in the face of adversity as well as our joint contributions. 

                    </p>
                   
                </div>
                <div className = "container my-3" style = {{color: 'white'}}>
                    <img 
                        className ="mb-3"
                        src="assets/img/r4.jpg"
                        style={{ objectFit:'cover', height: '100%', width: '100%',}}
                    />
                    <p className ='text-center my-3'>
                    Upon recalling these lessons, I was transported back to the present. After calming my teammates down, we worked in unison and traced the problem to a disconnected battery. I directed the mechanics to rebuild the mount and the electricians to fix the battery. Similarly, the drivers devised a more effective way to move the robot past potential obstacles that could detach the battery. 


                    </p>
                   
                </div>
                <div className = "container my-3" style = {{color: 'white'}}>
                    <img 
                        className ="mb-3"
                        src="assets/img/r5.jpg"
                        style={{ objectFit:'cover', height: '100%', width: '100%',}}
                    />
                    <p className ='text-center my-3'>
                    Our collaborative efforts were rewarded with that year’s Newcomer’s Award, ensuring the club’s continuity to date. This experience and the lessons from my Robotics family will inspire my future engineering endeavors, reaffirming my belief in trust, dialogue, and teamwork – key ingredients to scientific innovation and life.  

                    </p>
                   
                </div>

                <div className = "container my-3 text-center" style = {{color: 'white'}}>
                    <img 
                        className ="mb-3"
                        src="assets/img/r8.jpg"
                        style={{ objectFit:'cover', height: '100%', width: '100%',}}
                    />
                    <p className ='text-center my-5'>
                    What you've just read is an essay that got me into college. Robotics was one of the biggest parts of my high school. Nothing beats the moments I had with my teammates and mentors tackling engineering problems and innovating new ideas. During such a hard time like this, I have come to appreciate the amazing 3 years that I was able to do the things I love. Hopefully once this is over, I can continue building more robots and working with amazing people at Vanderbilt and beyond!

                    </p>
                   
                </div>
                
              


              
                

            </div>
        )
    }
}
