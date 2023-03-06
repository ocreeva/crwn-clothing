import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as MoybaLogo } from '../../assets/crown.svg';

import './Navigation.styles.scss';

const Navigation = () => {
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;
