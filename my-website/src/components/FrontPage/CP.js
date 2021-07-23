import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Projects.css'

export default class CP extends Component {
    render() {
        return (
    <section id="CP" class="services">
      <div class="container text-center" data-aos="fade-up">

        <div class="section-title">
          <h2>Data Structures and Algorithms - Competitive Programming</h2>
          <p class = "intext">I just recently self-studied data structures and algorithms(DSAs) and decided to try out competitive programming(CP) to improve my algorithmic skills. I am by no means an expert at competitive programming but I hope my reposistories help you navigate though your DSAs/CP journey.</p>
        </div>

        <div class="row mt-5">
            
                <div class="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  
                    <div>
                      <a className ="cp" href = "https://github.com/acao2002/Learn-DataStructures-and-Algorithms-with-Hackerrank-Solutions" target = "blank"> 
                        <h4 className ="text-center cp" style = {{color:'lightblue'}}>Data Structure and Algorithms</h4> 
                      </a>
                      <p className ="text-center"style ={{color:'lightgray'}}>My own written explanations and corroboration of different sources on data structures and algorithms concepts as well as my solutions to associated problems on <a href ="https://www.hackerrank.com/domains/data-structures" target ="blank">Hackerrank</a></p>
                    </div>
                   
                    
                  
                </div>
            

          <div class="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
           
           <div>
              <a className ="cp" href = "https://github.com/acao2002/Google-Code-Jam" target = "blank">
                <h4 className ="text-center cp" style = {{color:'lightblue'}}>Google Code Jam</h4>
              </a>
              <p  className ="text-center" style ={{color:'lightgray'}}> My solutions of some past problems preparing for 2021 competition and my solutions of the <a href ="https://codingcompetitions.withgoogle.com/codejam" target ="blank">ongoing 2021 Code Jam.</a> </p>
           </div>
            
            
           
          </div>

          
        </div>

      </div>
    </section>
        )
    }
}
