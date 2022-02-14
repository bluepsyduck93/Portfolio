import React from 'react'
import './projects.scss'
import ProjectCard from "../../components/projectCard/projectCard";
import TwitchChat from '../../assets/sites/twitchchat.png'
import PetPassport from '../../assets/sites/petpassport.png'
import BraveTFT from '../../assets/sites/bravetft.png'
export default  function Projects() {
    return(
        <div>
            <h1>Projects</h1>
            <section className="project-card-container">
                <ProjectCard
                    name={"Twitch Chat Analysis"}
                    image={TwitchChat}
                    description={""}
                    technology={""}
                    link={"https://github.com/bluepsyduck93/Twitch-Chat-Analysis"}
                />
                <ProjectCard
                    name={"Pet Passport Teaching Application"}
                    image={PetPassport}
                    description={""}
                    technology={""}
                    link={""}
                />
                <ProjectCard
                    name={"Brave TFT - WIP"}
                    image={BraveTFT}
                    description={""}
                    technology={""}
                    link={""}
                />
            </section>
        </div>
    )
}