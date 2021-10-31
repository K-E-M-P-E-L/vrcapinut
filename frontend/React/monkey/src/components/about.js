import React from 'react'
import { Link } from "react-router-dom"

function About() {
    return (
        <div id="about">
            <div class="about container">
            <div class="col-left">
                <div class="about-img">
                <img src="./img/Kempelsp.jpg" alt="img"/>
                </div>
            </div>
            <div class="col-right">
                <h1 class="section-title">About <span>me</span></h1>
                <h2>Developer</h2>
                <p>I code js, html, scss, css, c#, nodejs.</p>
                <Link to="#" class="cta">Download Resume</Link>
            </div>
            </div>
        </div>
    )
}

export default About
