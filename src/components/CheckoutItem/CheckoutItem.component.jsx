import { useContext } from 'react';

import CartContext from '../../context/CartContext';
import ProductsContext from '../../context/ProductsContext';

import './CheckoutItem.styles.scss';

const CheckoutItem = ({ item }) => {
    const { id, quantity } = item;
    const { productById } = useContext(ProductsContext);
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const { imageUrl, name, price } = productById[id];

    const handleIncrement = () => addItemToCart(id);
    const handleDecrement = () => removeItemFromCart(id);
    const handleRemove = () => clearItemFromCart(id);

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleDecrement}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleIncrement}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={handleRemove}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
