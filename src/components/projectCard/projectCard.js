import React from 'react'
import './projectCard.scss'
export default  function ProjectCard({
    name,
    image,
    description,
    technology
}) {
    return(
        <div className="resume-card">
            <div className="resume-card-name">
                <h3>{name}</h3>
            </div>
            <div className="resume-card-image-container">
                {image ? <img className="resume-card-image" src={image}/> : <div className="resume-card-image-error">Sorry this image is not avaliable at this time</div>}
            </div>
        </div>
    )
}