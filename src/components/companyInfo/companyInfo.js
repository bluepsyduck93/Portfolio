import React from 'react'
import './companyInfo.scss'
export default  function CompanyInfo({
    name,
    image,
    location,
    jobTitle,
    team,
    dates
}) {
    return(
        <div className="company-info-container">
            <div className="company-info-logo-name-container">
                <img className="company-logo" src={image}/>
                <h1>
                    {name}
                </h1>
            </div>
            <div className="company-info-details-container">
                <h3>
                    {location}
                </h3>
                <h3>
                    {jobTitle} - {team}
                </h3>
                <h3>
                    {dates}
                </h3>
            </div>
        </div>
    )
}