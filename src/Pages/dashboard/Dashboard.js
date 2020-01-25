import React from 'react';
import MaterialIcon from "material-icons-react";
import { Link } from "react-router-dom";
// Styles
import './dashboard.css'

function Dashboard() {
    return (
        <div className='dashboardContainer'>
            <img src={require('./../../Images/wallpaper1.jpg')} alt='dashboard wallpaper' />
            <p>
                <span><MaterialIcon icon='search' color='white' size='80px' /></span>
                <Link to='/Menu'>Find my recipe</Link>
            </p>
        </div>
    )
}

export default Dashboard
