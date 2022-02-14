import React from 'react'
import './projects.scss'
import ProjectCard from "../../components/projectCard/projectCard";
import TwitchChat from '../../assets/sites/twitchchat.png'
import PetPassport from '../../assets/sites/petpassport.png'
import BraveTFT from '../../assets/sites/bravetft.png'
import PythonIcon from '../../assets/python.png'
import JupyterIcon from '../../assets/Jupyter.png'
import ReactJSIcon from '../../assets/reactjs.svg'
import AngularIcon from "../../assets/angular.png"
import GitHubIcon from '../../assets/GitHub-Mark-64px.png'

export default  function Projects() {
    return(
        <div className="project-container">
            <h1>Projects</h1>
            <section className="project-card-container">
                <ProjectCard
                    name={"Twitch Chat Analysis"}
                    image={TwitchChat}
                    description={"An analysis of Twitch Chat, sentiment, word clouds, shared word usage"}
                    technology={
                        <div className="tech-icons-container">
                            <img className="tech-icon" src={PythonIcon} alt={'python icon'}/>
                            <img className="tech-icon" src={JupyterIcon} alt={'juypter icon'}/>
                        </div>
                    }
                    link={
                        <div className="link-container" onClick={()=>{window.open('https://github.com/bluepsyduck93/Twitch-Chat-Analysis')}}>
                            <button className="link-button">
                                <img className="tech-icon" src={GitHubIcon} alt={'git hub icon'}/>
                            </button>
                        </div>
                    }
                />
                <ProjectCard
                    name={"Pet Passport Teaching Application"}
                    image={PetPassport}
                    description={"A quick to make React website for the purpose of teaching new folks on how to translate from design to React site, some instruction is required"}
                    technology={
                        <div className="tech-icons-container">
                            <img className="tech-icon" src={ReactJSIcon} alt={'react j s icon'}/>
                        </div>

                    }
                    link={
                        <div className="link-container">
                            <button className="link-button" onClick={()=>{window.open('https://github.com/bluepsyduck93/Pet_Passport')}}>
                                <img className="tech-icon" src={GitHubIcon} alt={'git hub icon'}/>
                            </button>
                        </div>
                    }
                />
                <ProjectCard
                    name={"Brave TFT - WIP"}
                    image={BraveTFT}
                    description={"A website for the purpose of giving a user a random team composition to aim for while playing TFT"}
                    technology={
                        <div className="tech-icons-container">
                            <img className="tech-icon" src={AngularIcon} alt={'angular icon'}/>
                        </div>
                    }
                    link={""}
                />
            </section>
        </div>
    )
}