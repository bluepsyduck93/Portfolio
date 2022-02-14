import React from 'react'
import './homeNavBar.scss'
export default  function HomeNavBar() {
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-tab">
                Resume
            </div>
            <div className="nav-bar-tab">
                Projects
            </div>
            <div className="nav-bar-tab">
                About Me
            </div>
        </div>
    )
}