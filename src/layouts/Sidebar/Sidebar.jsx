import {React, useState } from 'react';
import MenuItem from "../../components/MenuItem/MenuItem";
import SocialLink from "../../components/SocialLink/SocialLink";
import Icon from "../../components/Icon/Icon";
import "./Sidebar.css"

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSidebar = () => setIsCollapsed(prev => !prev);

    const menuItems = [
        { to: "", icon: <Icon.HOME className="icon" />, title: "Home" },
        { to: "/home", icon: <Icon.BAG className="icon" />, title: "Productos" },
        { to: "/detalle", icon: <Icon.LISTALT className="icon" />, title: "Productos Detalle" },
        { to: "/login", icon: <Icon.LOGIN className="icon" />, title: "Login" },
        { to: "/registro", icon: <Icon.USER className="icon" />, title: "Registro" }
    ];

    const bottomItems = [
        { to: "/settings", icon: <Icon.SETTINGS className="icon" />, title: "Setting" },
        { to: "/help", icon: <Icon.QUESTION className="icon" />, title: "Help" }
    ];

    const socialLinks = [
        { to: "", icon: <Icon.INSTAGRAM className="icon" /> },
        { to: "", icon: <Icon.WHATSAPP className="icon" /> }
    ];


    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="logo-conteiner">
                <Icon.REACT className="logo-icon" size={30} color="#ffc831" />
                <span className="divider" />
                <button className="menu-toggle" onClick={toggleSidebar}>
                    <Icon.MENU className="icon" />
                </button>
            </div>

            <div className="menu">
                {menuItems.map(({ to, icon, title }) => (
                    <MenuItem key={title} to={to} icon={icon} title={title} />
                ))}
            </div>

            <div className="bottom-menu">
                {bottomItems.map(({ to, icon, title }) => (
                    <MenuItem key={title} to={to} icon={icon} title={title} />
                ))}
            </div>

            <div className="footer">
                {socialLinks.map(({ to, icon }, i) => (
                    <SocialLink key={i} to={to} icon={icon} />
                ))}
                <p className="copyright">Copyright 2025</p>
            </div>
        </div>
    );
}

export default Sidebar;
