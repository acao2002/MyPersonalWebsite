import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Organizations extends Component {
    render() {
        return (
    <section id="Hobbies" class="services">
      <div class="container text-center" data-aos="fade-up">

        <div class="section-title">
          <h2>My Hobbies</h2>
        </div>

        <div class="row text-center">
                <div class="col-lg-5 col-md-6 d-flex  mx-auto" data-aos="zoom-in" data-aos-delay="100">
                  
                  <div class="icon-box2 ">
             
                      <div >
                          <img 
                          src={'assets/img/music.jpg'}style={{"position":"relative", objectFit:'cover', height: '230px', width: '100%',}}/>
                      </div>
                      
                  <h4 style = {{color:'lightblue'}}>Music</h4>
                  <p  style ={{color:'lightgray', fontWeight:"bold"}}>What I do</p><p style ={{color:'lightgray'}}>Guitarist/ Learning music production</p>
                  <p  style ={{color:'lightgray', fontWeight:"bold"}}>Channels</p><p style ={{color:'lightgray'}}> Follow me on Youtube and SoundCloud</p>
                  <a href = "https://www.youtube.com/channel/UCr_jeNBhNP9oSqI92sWH8VQ"  target="_blank">
                    <img class ="mt-4 mx-2"src='/assets/img/sc.png' style = {{width:"25%",height: "20%"}}></img>
                  </a>
                  <a href = "https://soundcloud.com/xanuchiha2002"  target="_blank">
                   
                    <img class ="mt-4 mx-2"src='/assets/img/yt.png' style = {{width:"25%",height: "20%"}}></img>
                  </a>
                  
                  </div>
                  
     
                
                </div>

                <div class="col-lg-5 col-md-6 d-flex  mx-auto" data-aos="zoom-in" data-aos-delay="100">
                  
                  <div class="icon-box2 ">
             
                      <div >
                          <img 
                          src={'assets/img/chess.jpg'}style={{"position":"relative", objectFit:'cover', height: '100%', width: '100%',}}/>
                      </div>
                      
                  <h4 style = {{color:'lightblue'}}>Chess</h4>
                  <p  style ={{color:'lightgray', fontWeight:"bold"}}>Past achievements</p>
                  <p style ={{color:'lightgray'}}> U13 National Champion 2015,2016</p>
                  <p style ={{color:'lightgray'}}> U14 ASEAN Team Classical Champion(representing Vietnam) 2015</p>
                  <p style ={{color:'lightgray'}}> U13 World school championship 9th runner up(representing Vietnam) 2014</p>

                  <p  style ={{color:'lightgray', fontWeight:"bold"}}>Current status</p><p style ={{color:'lightgray'}}> I stopped competing since 2016 and now I only play for fun</p>
                  <a href = "https://lichess.org/@/andrew223344"  target="_blank">
                    Play with me on Lichess
                  </a>
                  
                  </div>
                  
     
                
                </div>

        </div>
        

      </div>
    </section>
        )
    }
}
