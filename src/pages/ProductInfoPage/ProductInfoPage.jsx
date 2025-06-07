import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCardInfo from '../../components/ProductCardInfo/ProductCardInfo'
import NoProductSelected from '../../components/NoProductSelected/NoProductSelected'
import { getProductById } from '../../services/productService'
import './ProductInfoPage.css'

const ProductInfoPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await getProductById(id)
                if (res) {
                    setProduct(res)
                } else {
                    setError('Producto no encontrado')
                }
            } catch (err) {
                setError('Error al cargar el producto')
            } finally {
                setLoading(false)
            }
        };

        fetchProduct()
    }, [id])

    if (loading) return <p>Cargando...</p>
    if (error) return <NoProductSelected
        message="Seleccione un producto para ver el detalle"
        route="/home"
        textLink="Ir a la lista de productos">
    </NoProductSelected>

    return (
        <div className="product-details-page">
            <h1 className="page-title">Detalles del producto</h1>
            <ProductCardInfo {...product} />
        </div>
    );
};

export default ProductInfoPage;

