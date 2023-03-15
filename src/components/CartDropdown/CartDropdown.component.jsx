import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import CartContext from '../../context/CartContext';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
    const { items } = useContext(CartContext);
    const navigate = useNavigate();

    const handleGoToCheckout = () => navigate('/checkout');

    return (
        <div className='cart-dropdown'>
            <div className='items'>
                {items.map((item) => 
                    <CartItem key={item.id} item={item} />
                )}
            </div>
            <Button type='button' onClick={handleGoToCheckout}>Go to Checkout</Button>
        </div>
    );
};

export default CartDropdown;
