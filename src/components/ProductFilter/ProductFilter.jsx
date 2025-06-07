import React from 'react'
import './ProductFilter.css'

function ProductFilter() {
    const filters = [
        'Todos', 'Accesorios', 'Portátiles y PCs', 'Componentes y Hardware',
        'Audio y Video', 'Smartphones', 'Gaming', 'Electrodomésticos',
        'Hogar Inteligente','Cámaras y Drones'
    ];

    return (
        <div className="product-filters">
            {filters.map((filter, i) => (
                <button key={i} className="filter-btn">{filter}</button>
            ))}
        </div>
    )
}

export default ProductFilter