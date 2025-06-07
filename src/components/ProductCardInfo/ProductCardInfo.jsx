import React from 'react';
import Icon from '../../components/Icon/Icon'
import './ProductCardInfo.css';

const ProductCardInfo = ({ id, name, img, originalPrice, discount, quantity, features }) => {
    if (!id) {
        return <div className="no-product">Seleccione un producto para ver los detalles.</div>;
    }

    const finalPrice = (originalPrice - (originalPrice * discount / 100));

    const formattedFinalPrice = finalPrice.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const formattedOriginalPrice = originalPrice.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });

    return (
        <div className="product-info-card">
            <div className="product-image-section">
                <img src={img} alt={name} />
            </div>
            <div className="product-details-section">
                <h2>{name}</h2>
                <p className={`stock ${quantity === 0 ? 'out-of-stock' : ''}`}>
                    {quantity > 0 ? `En stock: ${quantity}` : 'Sin stock'}
                </p>
                <ul className="features-list">
                    {features.map((feature, i) => (
                        <li key={i}>• {feature}</li>
                    ))}
                </ul>
                <div className="price-block">
                    {discount > 0 && <span className="discount-badge">-{discount}%</span>}
                    <span className="final-price">{formattedFinalPrice}</span>
                    {discount > 0 && (
                        <span className="original-price">{formattedOriginalPrice}</span>
                    )}
                </div>

                <button className="add-to-cart-btn">
                    <Icon.SHOPPING className="add-cart-icon" /> Agregar al carrito
                </button>

            </div>
        </div>
    );
};

export default ProductCardInfo;
