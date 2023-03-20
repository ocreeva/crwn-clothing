import { useContext } from 'react';

import CartContext from '../../context/CartContext';
import ProductsContext from '../../context/ProductsContext';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';

import './Checkout.styles.scss';

const Checkout = () => {
    const { items } = useContext(CartContext);
    const { productById } = useContext(ProductsContext);

    const total = items.reduce((total, {id, quantity}) => {
        const { price } = productById[id];
        return total + price * quantity;
    }, 0);

    return (
        <div className='checkout'>
            <div className='header'>
                <div className='heading'>Product</div>
                <div className='heading'>Description</div>
                <div className='heading'>Quantity</div>
                <div className='heading'>Price</div>
                <div className='heading'>Remove</div>
            </div>
            { items.map((item) => (
                <CheckoutItem key={item.id} item={item} />
            )) }
            <span className='total'>Total: ${total}</span>
        </div>
    );
}

export default Checkout;
