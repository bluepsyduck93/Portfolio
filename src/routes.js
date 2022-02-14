import React from "react"
import { Route, Routes } from 'react-router-dom'
import HomeNavBar from "./components/navBars/homeNavBar/homeNavBar"
import Suki from "./pages/suki/suki"
import Projects from "./pages/projects/projects"
import AboutMe from "./pages/aboutMe/aboutMe"
import Resume from "./pages/resume/resume"
import Home from "./pages/home/home";

export default function MyRoutes(){

    return(
        <div>
            <HomeNavBar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/suki" element={<Suki />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>

    )
}