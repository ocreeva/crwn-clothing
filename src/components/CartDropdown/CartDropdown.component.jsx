import { useContext } from 'react';

import CartContext from '../../context/CartContext';

import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
    const { items } = useContext(CartContext);

    return (
        <div className='cart-dropdown'>
            <div className='items'>
                {items.map((item) => 
                    <CartItem key={item.id} item={item} />
                )}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    );
};

export default CartDropdown;
