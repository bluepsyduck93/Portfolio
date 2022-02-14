import React from 'react'
import './resume.scss'
import CompanyInfo from "../../components/companyInfo/companyInfo";
import ProjectCard from "../../components/projectCard/projectCard";
import BrandInspectorSite from '../../assets/sites/brandinspector.png'
import BRQCSite from '../../assets/sites/brqc.png'
import BRQCWireframe from '../../assets/sites/wireframe.png'
import JandJLogo from '../../assets/jandj.jpeg'
import PCMillerSite from '../../assets/sites/pcmiller.png'
import SingleSearchSite from '../../assets/sites/singlesearch.png'
import TrimbleLogo from '../../assets/trimble.jpeg'
import UMPSite from '../../assets/sites/ump.png'
import WebComponentIcon from '../../assets/webcomponents.png'
import NodeJSIcon from '../../assets/nodejs.png'
import ReactJSIcon from '../../assets/reactjs.svg'
import GraphQLIcon from '../../assets/graphql.svg'
import StoryBookIcon from '../../assets/storybook.svg'
import AdobeXDIcon from '../../assets/adobexd.png'
import AngularIcon from '../../assets/angular.png'
import AngularJSIcon from '../../assets/AngularJS.png'
import JWTIcon from '../../assets/jwt.svg'
export default  function Resume() {
    return(
        <div className="resume-container">
            <h1>Resume</h1>
          <section id="jandj-resume">
                  <div>
                          <CompanyInfo
                              name={"Johnson & Johnson"}
                              image={JandJLogo}
                              location={"Raritan, NJ"}
                              jobTitle={"Software Engineering Developer"}
                              team={"Web and Mobile Applications Team"}
                              dates={"July 2020 - Current"}
                          />
                  </div>
                  <div className="resume-card-container">
                          <ProjectCard
                              name={"Brand Inspector"}
                              image={BrandInspectorSite}
                              description={"A survey site that helps a user gather survey data, and maintain quality assurance on flagship products"}
                              technology={
                                <div className="tech-icons-container">
                                    <img className="tech-icon" src={WebComponentIcon}/>
                                    <img className="tech-icon" src={NodeJSIcon} />
                                </div>
                              }
                          />
                          <ProjectCard
                              name={"Digital Surgery Enablement Platform - User Management Portal"}
                              image={UMPSite}
                              description={"An authentication site that allows hospital managers to register surgeons to J & J Medical Devices"}
                              technology={
                                  <div className="tech-icons-container">
                                      <img className="tech-icon" src={ReactJSIcon}/>
                                      <img className="tech-icon" src={NodeJSIcon} />
                                      <img className="tech-icon" src={StoryBookIcon} />
                                  </div>
                              }
                          />
                          <ProjectCard
                              name={"Bio Research and Quality Compliance Innovative Quality"}
                              image={BRQCSite}
                              description={"A data-analytics site that helps users visualize the J & J Audit Process, and manage the Audits based on permissions"}
                              technology={
                                  <div className="tech-icons-container">
                                      <img className="tech-icon" src={ReactJSIcon}/>
                                      <img className="tech-icon" src={GraphQLIcon} />
                                  </div>
                              }
                          />
                          <ProjectCard
                              name={"Bio Research and Quality Compliance Innovative Quality Wireframe"}
                              image={BRQCWireframe}
                              description={"A wireframe made for the BRQC analytics site"}
                              technology={
                                  <div className="tech-icons-container">
                                      <img className="tech-icon" src={AdobeXDIcon}/>
                                  </div>
                              }
                          />
                  </div>
          </section>
          <section id="trimble-resume">
                  <div>
                          <CompanyInfo
                              name={"Trimble Maps"}
                              image={TrimbleLogo}
                              location={"Princeton, NJ"}
                              jobTitle={"Software Engineering Intern"}
                              team={"Server and Web Applications Team"}
                              dates={"April 2019 - September 2019"}
                          />
                  </div>
                  <div className="resume-card-container">
                          <ProjectCard
                              name={"PC*Miler Web"}
                              image={PCMillerSite}
                              description={""}
                              technology={
                                  <div className="tech-icons-container">
                                      <img className="tech-icon" src={AngularJSIcon}/>
                                  </div>
                              }
                          />
                          <ProjectCard
                              name={"Place Editor"}
                              image={""}
                              description={""}
                              technology={
                                  <div className="tech-icons-container">
                                      <img className="tech-icon" src={AngularJSIcon}/>
                                      <img className="tech-icon" src={JWTIcon}/>
                                  </div>
                              }
                          />
                          <ProjectCard
                              name={"Single Search"}
                              image={SingleSearchSite}
                              description={""}
                              technology={
                                  <div className="tech-icons-container">
                                      <img className="tech-icon" src={AngularIcon} />
                                  </div>
                              }
                          />
                  </div>

          </section>

        </div>
    )
}