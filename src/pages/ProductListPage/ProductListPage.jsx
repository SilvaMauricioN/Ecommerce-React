import { REact, useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProducts } from '../../services/productService';
import "./ProductListPage.css"

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [visibleCount, setVisibleCount] = useState(6);


    const fetchProductList = async () => {
        setLoading(true);

        try {
            const res = await getProducts();
            if (res) {
                setProducts(res);
            } else {
                setError('Error al obtener los productos.');
            }
        } catch (err) {
            setError('Se produjo un error al cargar los productos.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6); 
    };

    const isAdmin = true;

    const components = products.slice(0, visibleCount).map(
        (product) => {
            return <ProductCard
                {...product}
                key={product.id}
                title=""
                isAdmin={isAdmin}
            >
            </ProductCard>
        }
    )

    let content

    if (loading) {
        content = <p className="loading-message">Cargando...</p>
    } else {
        if (error) {
            content = <p className="error-message">{error}</p>
        } else {
            content = components
        }
    }

    return (
        <section
            className={isAdmin ? 'admin-box' : 'product-box'}
            id="special-box"
        >

            <div className="product-container">
                {content}
            </div>

            {!loading && !error && visibleCount < products.length && (
                <button onClick={handleLoadMore} className="load-more-btn">
                    Load more
                </button>
            )}
        </section>
    );
};

export default ProductListPage;
