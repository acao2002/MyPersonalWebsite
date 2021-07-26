import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './Projects.css'

export default class TradeBot extends Component {
    render() {
        return (
    <section id="CP" class="services">
      <div class="container text-center" data-aos="fade-up">

        <div class="section-title">
          <h2>Trading, Arbitrage ecosystem - a lifetime project </h2>
          <p class = "intext">Over my freshman gap semester and summer, I discovered the world of finance through the hook of blockchain technologies. Through my first investments, I learned to better organize my income and protect my assets against the incessant rise of inflation. As Warren Buffet said, you will work until you die if you cannot find a way to earn money while sleeping. Hence, I have decided to start a life-long project where I utilize my coding skills and my understanding of finance to develop a smart, automated trading, arbitrage, and possibly funds regulation ecosystem. </p>
          <p class = "intext mt-5 "> The first iteration was a myriad of Bitcoin and Stocks trading bots using momentum-catching and dca strategies coupled with the IQ Option API(of IQ Option broker). The experiements opened a lot of new cs tools and concepts for me as I had to read the source code of the API(insufficient documentation). There were lots of limitations but I feel like it is a good starting point. Please refer to the docs below for more information.  </p>
        </div>

        <div class="row mt-5 justify-content-center">
            
                <div class="align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                  
                    <div>
                      <a className ="cp" href = "https://github.com/acao2002/IQOptionTradingBot" target = "blank"> 
                        <h4 className ="text-center cp" style = {{color:'lightblue'}}>IQ OPTION TRADING BOTS</h4> 
                      </a>
                      <p className ="text-center"style ={{color:'lightgray'}}> Momentum and dca bots running on IQ OPTION platform.</p>
                    </div>
                   
                    
                  
                </div>
            

          
        </div>

      </div>
    </section>
        )
    }
}
