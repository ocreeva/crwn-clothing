import { useContext } from 'react';

import CartContext from '../../context/CartContext';

import Button from '../Button/Button.component';

import './ProductCard.styles.scss';

const ProductCard = ({ product }) => {
    const { id, name, imageUrl, price } = product;

    const { addItemToCart } = useContext(CartContext);

    const handleAddToCart = () => addItemToCart(id);

    return (
        <div className='product-card'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button type='inverted' onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
};

export default ProductCard;
