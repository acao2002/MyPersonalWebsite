import React from 'react'
import { Link } from 'react-router-dom'

export default function ViggOrg() {
    return (
        <div>
        <img 
            alt="background"
            className="background" 
            src="assets/img/viggg.jpeg"
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
                <h1>Vigg Start Up</h1>
                <h3 class = "my-3" style = {{color:'lightgrey'}}>A platform to for sneakers selling and retailing</h3>
                <div class="social-links text-center mx-auto">
                   <Link to="/Vigg" target="_blank"  class="ptt"><h3 style ={{fontWeight:'bold'}} >Our Prototype</h3></Link>
                </div>
            </div>
            <div class="section-title mt-4">
                <h3>Our Team</h3>
            </div>
            <div className = "container" style = {{color: 'white'}}>
                <h5 style ={{fontWeight:'bold'}}>CEO:</h5> <div style ={{fontSize:'20px'}}>Nam Vuong(Northwestern University) and Dung Vo(Mount Holyoke College)</div>
                <h5 className ="mt-2"style ={{fontWeight:'bold'}}>CTO:</h5> <div style ={{fontSize:'20px'}}>Andrew Cao(me) and Tim Huynh(Northwestern University)</div>
            </div>
            <div class="section-title mt-4 mb-1">
                <h3>Status</h3>
            </div>
            <div className ="container"style = {{color: 'white'}}>
                Our team ran our MVP from May 2020 to July 2020 while the developer team built the official app. I was working on the front end of the app using React and Bootstrap while Tim was working on the backend using SQL and Flask. Throughout our testing phase, we found out that our business model was not efficient enough and that the market was not obtainable with only a team of 4 people. The start up, hence, was postponed after the first phase. While we're no longer working on Vigg, we still have our project files ready and our data from market research. As a result, we hope to come back in the future after gaining more experience to revitalize our start up dream. 
            </div>
        </section>
    </div>

            

    )
}
