import { useContext } from 'react';

import ProductsContext from '../../context/ProductsContext';

import './CartItem.styles.scss';

const CartItem = ({ item }) => {
    const { id, quantity } = item;

    const { productById } = useContext(ProductsContext);
    const { imageUrl, name, price } = productById[id];

    return (
        <div key={id} className='cart-item'>
            <img src={imageUrl} alt={name} />
            <div className='details'>
                <span className='name'>{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    );
};

export default CartItem;
