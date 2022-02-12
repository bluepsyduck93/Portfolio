import React from 'react'

export default  function ProjectCard({
    name,
    image,
    description,
    technology
}) {
    return(
        <div>
            <h3>{name}</h3>
            <img src={image}/>
            <p>{description}</p>
            <p>{technology}</p>
        </div>
    )
}