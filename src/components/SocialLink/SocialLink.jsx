import React from 'react'
import { Link } from "react-router-dom";
import './SocialLink.css'

const SocialLink = ({ to, icon }) => {
    return (
        <Link to={to} className="footer-link">
            {icon}
        </Link>
    )
}

export default SocialLink;