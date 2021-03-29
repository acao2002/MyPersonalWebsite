import React, { Component } from 'react'
import Typed from 'react-typed';
import './Project.css';

export default class Chatbot extends Component {
    render() {
        return (
            <div>
                <img 
                    alt="background"
                    className="background" 
                    src="assets/img/bot.jpg"
                    style={{"position":"fixed", objectFit:'cover', height: '100%', width: '100%', opacity:'50%'}}
                />
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

              
                <header id="header" class="d-flex flex-column justify-content-center">

                    <nav class="nav-menu">
                            <ul>
                            <li class="active"><a href="/"><i class="bx bx-home"></i> <span>Home</span></a></li>
                            </ul>
                    </nav>
                

                </header> 
                
                <section id="hero" class="d-flex flex-column text-center ">
                    <div class="container" data-aos="zoom-in" data-aos-delay="100">
                        <h1>Andrew's Chatbot</h1>
                        <h3 class = "my-3" style = {{color:'lightgrey'}}>By Andrew Cao</h3>
                        <p>Technology:  <Typed strings={['Machine Learning','Natural Language Processing','Chatbot',]}typeSpeed={60} backSpeed={70} loop/>
                        </p>
                        <div class="social-links">
                            <a href="https://github.com/acao2002/Andrew-chatbot" target ="blank" class="ptt"><i class="devicon-github-original" ></i><div >Source code</div></a>
                            <a href="https://github.com/acao2002/Andrew-chatbot" target = "blank" class="ptt"><i class="icofont-newspaper"></i> <div >Paper/Blog</div></a>
                            <a href="https://github.com/acao2002/Andrew-chatbot#launch" target ="blank" class="ptt"><i class="icofont-ui-video-chat"></i><div >Deployed app/Demo </div></a>
                            <a href="/cms" class="ptt"><i class="icofont-key"></i><div > Tutorial </div></a>
                          
                        </div>
                    </div>
                    <div class="section-title mt-5">
                        <h3>About</h3>
                    </div>
                    <div className = "container" style = {{color: 'white'}}>
                    Too tired of breaking the ice yourself? Got too many people wanting to get to know you? That will no longer be a problem when you have a chatbot that can answer questions about yourself. Hence, I have decided to build a Machine Learning model to train my bot so as it can talk to people as if I am answering them myself.

The project uses NLP techniques such as Tokenization and padding word sequences to formulate strings of questions into same-sized matrix inputs for training.

The model utilizes an embedding layer and a lstm layer, with a softmax activation function to categorize the intents of the questions. From the identified intents, the chatbot picks the correlated answer to reply to the questions.

                    </div>
                </section>

              
                

            </div>
        )
    }
}
