import React from 'react'
import './resumeCard.scss'
export default  function ResumeCard({
    name,
    image,
    description,
    technology
}) {
    return image ? (
        <div className="resume-card">
            <div className="resume-card-name">
                <h3>{name}</h3>
            </div>
            <div className="resume-card-image-container">
                <img className="resume-card-image" src={image}/>
            </div>
        </div>
    ) : (
        <div className="resume-card">
            <h3>{name}</h3>
            <div className="resume-card-image-error">Sorry this image is not avaliable at this time</div>
        </div>

    )
}