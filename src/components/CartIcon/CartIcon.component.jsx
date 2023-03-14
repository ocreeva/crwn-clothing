import { useContext } from 'react';

import CartContext from '../../context/CartContext';

import './CartIcon.styles.scss';
import { ReactComponent as CartLogo } from '../../assets/shopping-bag.svg';

const CartIcon = () => {
    const { toggleIsCartOpen, items } = useContext(CartContext);

    return (
        <div className='cart-icon' onClick={toggleIsCartOpen}>
            <CartLogo className='icon' />
            <span className='count'>{items.length}</span>
        </div>
    );
};

export default CartIcon;
