import React from 'react'
import {Link} from 'react-router-dom'
import './homeNavBar.scss'
export default  function HomeNavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-tab">
                <Link to="/resume">Resume</Link>
            </div>
            <div className="nav-bar-tab">
                <Link to="/projects">Projects</Link>
            </div>
            <div className="nav-bar-tab">
                <Link to="/aboutme">About Me</Link>
            </div>
            <div className="nav-bar-tab">
                <Link to="/suki">Suki</Link>
            </div>
        </div>
    )
}