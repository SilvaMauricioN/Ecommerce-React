import React from 'react'
import './NavBar.css';
import Icon from '../../components/Icon/Icon';

const NavBar = () => {
    return (
        <header className="navbar">
            <input type="text" placeholder="Search..." className="search-input" />
            <div className="actions">
                <Icon.MOON className="icon" />
                <Icon.BELL className="icon" />
                <Icon.SHOPPING className="icon" />

                <button className="location-btn">Ingresá Tu Ubicación</button>
                <Icon.USER className="icon" />
            </div>
        </header>
    );
}

export default NavBar