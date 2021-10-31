import React from 'react'
import Header from "../components/header"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Footer from "../components/footer"

function Home() {
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home
