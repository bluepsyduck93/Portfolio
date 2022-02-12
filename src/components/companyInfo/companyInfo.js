import React from 'react'

export default  function CompanyInfo({
    name,
    image,
    location,
    jobTitle,
    team,
    dates
}) {
    return(
        <div>
            <section>
                <img src={image}/>
                <h1>
                    {name}
                </h1>
                <h3>
                    {location}
                </h3>
            </section>
            <section>
                <h3>
                    {jobTitle} - {team}
                </h3>
                <h3>
                    {dates}
                </h3>
            </section>
        </div>
    )
}