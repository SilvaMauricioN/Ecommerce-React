import React from 'react'
import { NavLink } from "react-router-dom";
import './MenuItem.css'

const MenuItem = ({ to, icon, title }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `menu-item ${isActive ? "active" : ""}`}
        >
            {icon}
            <span className="highlighted-text">{title}</span>
        </NavLink>
    );
}

export default MenuItem;