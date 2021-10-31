import React from 'react'
import { Link } from "react-router-dom"
import { HashLink as Linke } from 'react-router-hash-link';

function Header() {
    function scrool() {
        window.scrollTo(0, 0);
    }
    return (
        <div id="header">
            <div className="header container">
            <div className="nav-bar">
                <div className="brand">
                <Link to="/" onClick={scrool}><h1><span>KEMPEL</span>'S <span>WEB</span>SITE</h1></Link>
                </div>
                <div className="nav-list">
                <div className="hamburger"><div className="bar"></div></div>
                <ul>
                    <li><Link to="/" onClick={scrool} data-after="Home">Home</Link></li>
                    <li><Link to="/Video" onClick={scrool} data-after="Service">Videos</Link></li>
                    <li><Link to="/Picture" onClick={scrool} data-after="Projects">Pictures</Link></li>
                    <li><Link to="/Files" onClick={scrool} data-after="About">Files</Link></li>
                    <li><Linke to="/#about" data-after="About">About</Linke></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header
