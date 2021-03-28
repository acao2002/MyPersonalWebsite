import React from 'react'
import './Facts.css'
import CountUp from 'react-countup';
export default function Facts() {
    return (
        <div>
            <section id="facts" class="facts">
                <div class="container" data-aos="fade-up">
        
                    <div class="section-title intext">
                        <h2>Facts</h2>
                        <p>Engineering and Computer Science</p>
                    </div>
            
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div class="count-box">
                                <i class="icofont-document-folder"></i>
                                <CountUp end={7} />
                                <p class ="cate">Projects</p>
                            </div>
                        </div>
           
                        <div class="col-lg-3 col-md-6">
                            <div class="count-box">
                                <i class="icofont-binary"></i>
                                <CountUp end={4} />
                                <p class ="cate">Programming languages</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                                <i class="icofont-computer"></i>
                                <CountUp end={2} />
                                <p class ="cate">Hackathons</p>
                            </div>
                        </div>
                         
                        <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div class="count-box">
                                <i class="icofont-users-alt-5"></i>
                                <span data-toggle="counter-up">2</span>
                                <p class ="cate">Organizations</p>
                            </div>
                        </div>

                    
                
                      
            
                  
            
                     

                    </div> 
                </div>
            </section>
        </div>
        
    )
}
