import React from 'react'
import './projectCard.scss'
export default  function ProjectCard({
    name,
    image,
    description,
    technology,
    link
}) {
    return image ? (
        <div className="resume-card-container">
            <div className="resume-card">
                <div className="resume-card-name">
                    <h3>{name}</h3>
                </div>
                <div className="resume-card-image-container">
                    <img className="resume-card-image" src={image} alt={'project card'}/>
                </div>
            </div>
            <div>
                {technology}
            </div>
            <div>
                {description}
            </div>
            <div>
                {link}
            </div>
        </div>

    ) : (
        <div className="resume-card-container">
            <div className="resume-card">
                <h3>{name}</h3>
                <div className="resume-card-image-error">Sorry this image is not avaliable at this time</div>
            </div>
            <div>
                {technology}
            </div>
            <div>
                {description}
            </div>
            <div>
                {link}
            </div>
        </div>


    )
}