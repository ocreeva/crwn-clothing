import { useContext } from 'react';

import CartContext from '../../context/CartContext';

import Button from '../Button/Button.component';

import './CartDropdown.styles.scss';

const CartDropdown = () => {
    const { items } = useContext(CartContext);

    return (
        <div className='cart-dropdown'>
            <div className='items'>
                {items.map((item) => 
                    <div>{item}</div>
                )}
            </div>
            <Button>Go to Checkout</Button>
        </div>
    );
};

export default CartDropdown;
