import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section id="contact" class="contact">
                    <div class="container text-center" data-aos="fade-up">

                        <div class="section-title">
                        <h2>Contact</h2>
                        </div>

                        <div class="row mt-1 ">

                            <div class="col-lg-6 text-center mx-auto">
                                <div class="info">
                                <div class="address">
                                    <i class="icofont-google-map"></i>
                                    <h4>Location:</h4>
                                    <p>2201 West End Ave, Nashville, TN 37235, United States</p>
                                </div>

                                <div class="email">
                                    <i class="icofont-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>xuanan12072002@gmail.com</p>
                                </div>

                                <div class="phone">
                                    <i class="icofont-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 857 399 5530(US)</p>
                                    <p class = "ml-5">+84 961 830 767(VN)</p>
                                </div>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
