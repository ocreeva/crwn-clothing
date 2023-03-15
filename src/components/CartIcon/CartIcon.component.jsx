import { useContext } from 'react';

import CartContext from '../../context/CartContext';

import './CartIcon.styles.scss';
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const { toggleIsCartOpen, items } = useContext(CartContext);
    const count = items.reduce((current, item) => current + item.quantity, 0)

    return (
        <div className='cart-icon' onClick={toggleIsCartOpen}>
            <CartLogo className='icon' />
            <span className='count'>{count}</span>
        </div>
    );
};

export default CartIcon;
