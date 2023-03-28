import { useContext } from "react";
import CartContext from "../context/CartContext";

import { useSelector } from "react-redux";
import { userSelector } from "../selectors";

import { signOut } from "../utility/firebase/firebase.utility";

import * as S from "./styles";
import { Outlet } from "react-router-dom";
import ShoppingCartDropdown from "../components/ShoppingCart/Dropdown";
import ShoppingCartIcon from "../components/ShoppingCart/Icon";

const DefaultLayout = () => {
    const { isCartOpen } = useContext(CartContext);
    const userAuth = useSelector(userSelector.getUserAuth);

    return (<>
        <S.NavigationContainer>
            <S.LogoLink to='/'>
                <S.LogoImage />
            </S.LogoLink>
            <S.NavLinkCollection>
                <S.NavLink to='/shop'>
                    SHOP
                </S.NavLink>
                { userAuth ? (
                    <S.NavLink as='span' onClick={signOut}>
                        SIGN OUT
                    </S.NavLink>
                ) : (
                    <S.NavLink to='/sign-in'>
                        SIGN IN
                    </S.NavLink>
                )}
                <ShoppingCartIcon />
            </S.NavLinkCollection>
            {isCartOpen && <ShoppingCartDropdown />}
        </S.NavigationContainer>
        <Outlet />
    </>);
};

export default DefaultLayout;
