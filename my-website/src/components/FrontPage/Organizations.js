import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Organizations extends Component {
    render() {
        return (
    <section id="Organizations" class="services">
      <div class="container text-center" data-aos="fade-up">

        <div class="section-title">
          <h2>Organizations</h2>
        </div>

        <div class="row">
            
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mx-auto" data-aos="zoom-in" data-aos-delay="100">
                  <Link to ="/FTC15093">
                    <div class="icon-box ">
                    
                        <div >
                            <img 
                            src={'assets/img/robotics.jpg'}style={{"position":"relative", objectFit:'cover', height: '100%', width: '100%',}}/>
                        </div>
                        
                    <h4 style = {{color:'lightblue'}}>First Tech Challenge - Team 15093</h4>
                    <p  style ={{color:'lightgray', fontWeight:"bold"}}>Position:</p><p style ={{color:'lightgray'}}>  Founder and Former Team Leader</p>
                    <p  style ={{color:'lightgray', fontWeight:"bold"}}>Highlights:</p><p style ={{color:'lightgray'}}>  Recipient of the 2018 Argosy Foundation 4000$ FRC® Rookie Grant:</p>
                    <p style ={{color:'lightgray'}}> Winner of 2020 Wildwest Regional Round</p>
                    <p style ={{color:'lightgray'}}> Top 10 robots in MA 2020</p>
                    
                    </div>
                    </Link>
                  
                </div>
            

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch mx-auto" data-aos="zoom-in" data-aos-delay="100">
                  
                  <div class="icon-box ">
                  <Link to = "/Viggst">
                      <div >
                          <img 
                          src={'assets/img/vigg.jpeg'}style={{"position":"relative", objectFit:'cover', height: '70%', width: '100%',}}/>
                      </div>
                      
                  <h4 style = {{color:'lightblue'}}>Vigg Start Up</h4>
                  <p  style ={{color:'lightgray', fontWeight:"bold"}}>Position:</p><p style ={{color:'lightgray'}}>CTO/FrontEnd developer</p>
                  <p  style ={{color:'lightgray', fontWeight:"bold"}}>Summary</p><p style ={{color:'lightgray'}}> A platform to sell, buy, and retail sneakers</p>
                  </Link>
                  </div>
                
                </div>
      
        </div>
        

      </div>
    </section>
        )
    }
}
