import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { signOut } from '../../utility/firebase/firebase.utility';
import UserContext from '../../context/UserContext';

import './Navigation.styles.scss';
import { ReactComponent as MoybaLogo } from '../../assets/crown.svg';

const Navigation = () => {
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
