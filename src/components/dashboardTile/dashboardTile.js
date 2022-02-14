import React from 'react'
import './dashboardTile.scss'
import { useNavigate } from 'react-router-dom'

export default  function DashboardTile({
    picture,
    title,
    link
}) {
    const navigate = useNavigate()
    return(
        <div className="dashboard-tile-container" onClick={()=>{navigate(link)}}>
            {picture}
            <h3 className="dashboard-text">{title}</h3>
        </div>
    )
}