import React from 'react'
import CompanyInfo from "../../components/companyInfo/companyInfo";
import ProjectCard from "../../components/projectCard/projectCard";
import JandJLogo from '../../assets/jandj.jpeg'
import TrimbleLogo from '../../assets/trimble.jpeg'

export default  function Resume() {
    return(
        <div>
            <CompanyInfo
                name={"Johnson and Johnson"}
                image={JandJLogo}
                location={"Raritan, NJ"}
                jobTitle={"Software Engineering Developer"}
                team={"Web and Mobile Applications Team"}
                dates={"July 2020 - Current"}
            />
            <ProjectCard
                name={"Brand Inspector"}
                image={""}
                description={"A survey site that helps a user gather survey data, and maintain quality assurance on flagship products"}
                technology={"Web Components, Node, Express, Javascript"}
            />
            <ProjectCard
                name={"Digital Surgery Enablement Platform - User Management Portal"}
                image={""}
                description={"An authentication site that allows hospital managers to register surgeons on the Digital Surgery Platform, allowing them to perform surgeries on the J and J Medical Devices"}
                technology={"ReactJS, StoryBook, REST APIs"}
            />
            <ProjectCard
                name={"Bio Research and Quality Compliance Innovative Quality"}
                image={""}
                description={"React data-analytics site that helps users understand the J and J Audit Process, and allows them to analyze Audits that they have permission to"}
                technology={"ReactJS, GraphQL"}
            />
            <CompanyInfo
                name={"Trimble Maps"}
                image={TrimbleLogo}
                location={"Princeton, NJ"}
                jobTitle={"Software Engineering Intern"}
                team={"Server and Web Applications Team"}
                dates={"April 2019 - September 2019"}
            />
            <ProjectCard
                name={"PC*Miler Web"}
                image={""}
                description={""}
                technology={"AngularJS, REST APIs"}
            />
            <ProjectCard
                name={"Place Editor"}
                image={""}
                description={""}
                technology={"AngularJS, REST APIs, JWT"}
            />
            <ProjectCard
                name={"Single Search"}
                image={""}
                description={""}
                technology={"Angular2+, REST APIs"}
            />
        </div>
    )
}