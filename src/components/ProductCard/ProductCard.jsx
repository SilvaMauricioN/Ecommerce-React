import React from 'react';
import { Link } from 'react-router-dom';
import Icon from "../Icon/Icon";
import './ProductCard.css';

function ProductCart({ id, name, img, originalPrice, discount, quantity }) {

    const finalPrice = (originalPrice - (originalPrice * discount / 100))

    const formattedFinalPrice = finalPrice.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });

    const formattedOriginalPrice = originalPrice.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });
    const handleClickBuey = () => {
        setIsBought(true);
    };

    return (
        <div className="product-card">
            <img src={img} alt={name} className="product-image" />

            <div className="product-info">
                <Link to={`/detalle/${id}`} className="product-title">{name}</Link>
                <div className="product-prices">
                    <span className="product-final-price">{formattedFinalPrice}</span>
                    <span className="product-discount">{discount}% OFF</span>
                </div>

                <p className="product-original-price">{formattedOriginalPrice}</p>
                <p className="sales">Cantidad Disponible: {quantity}</p>
            </div>

            <div className="cart-icon">
                <button onClick={handleClickBuey} className="">
                    <Icon.SHOPPING className='icon-shopping'></Icon.SHOPPING>
                </button>
            </div>
        </div>
    );
}

export default ProductCart;

