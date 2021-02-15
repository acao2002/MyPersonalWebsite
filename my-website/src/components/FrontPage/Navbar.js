import React from 'react'

export default function Navbar() {
    return (
        <div>
                <button type="button" class="mobile-nav-toggle d-xl-none"><i class="icofont-navigation-menu"></i></button>

              
                <header id="header" class="d-flex flex-column justify-content-center">

                <nav class="nav-menu">
                        <ul>
                        <li class="active"><a href="#hero"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#projects"><i class="bx bx-server"></i> <span>Projects</span></a></li>
                        <li><a href="#Organizations"><i class="bx bx-book-content"></i> <span>Organizations</span></a></li>
                        <li><a href="#Hobbies"><i class="bx bx-music"></i> <span>Contact</span></a></li>
                        <li><a href="#contact"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                        </ul>
                </nav>
                

                </header>
        </div>
    )
}
