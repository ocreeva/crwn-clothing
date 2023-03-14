import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOut } from '../../utility/firebase/firebase.utility';
import CartContext from '../../context/CartContext';
import UserContext from '../../context/UserContext';

import CartDropdown from '../../components/CartDropdown/CartDropdown.component';
import CartIcon from '../../components/CartIcon/CartIcon.component';

import './Navigation.styles.scss';
import { ReactComponent as MoybaLogo } from '../../assets/crown.svg';

const Navigation = () => {
    const { isCartOpen } = useContext(CartContext);
    const { userAuth } = useContext(UserContext);

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-link' to='/'>
                    <MoybaLogo className='logo' />
                </Link>
                <div className='nav-link-collection'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    { userAuth ? (
                        <span className='nav-link' onClick={signOut}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className='nav-link' to='/sign-in'>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
