import { useContext } from 'react';

import ProductCard from '../../components/ProductCard/ProductCard.component';
import ProductsContext from '../../context/ProductsContext';

import './Shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className='products-collection'>
            { products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;
