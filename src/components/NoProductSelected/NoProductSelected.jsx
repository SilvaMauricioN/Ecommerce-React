import React from 'react'
import { Link } from 'react-router-dom';
import './NoProductSelected.css';

const NoProductSelected = ({
    message = "Seleccione un producto para ver el detalle",
    route = "/home",
    textLink = "Ir a la lista de productos"
}) => {
    return (
        <div className="empty-detail">
            <h2>{message}</h2>
            <Link to={route} className="empty-detail-link">
                {textLink}
            </Link>
        </div>
    );
};

export default NoProductSelected;
