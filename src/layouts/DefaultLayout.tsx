import { useAppSelector } from "App/hooks";
import { selectCartDropdownIsOpen } from "features/dropdown";
import { selectUserIsSignedIn } from "features/user";

import { signOut } from "services/auth";

import * as S from "./DefaultLayout.styles";
import { Outlet } from "react-router-dom";
import ShoppingCartDropdown from "components/ShoppingCart/Dropdown";
import ShoppingCartIcon from "components/ShoppingCart/Icon";

import type { FC } from "react";

const DefaultLayout: FC = () => {
    const cartDropdownIsOpen = useAppSelector(selectCartDropdownIsOpen);
    const userIsSignedIn = useAppSelector(selectUserIsSignedIn);

    return (<>
        <S.NavigationContainer>
            <S.LogoLink to='/'>
                <S.LogoImage />
            </S.LogoLink>
            <S.NavLinkCollection>
                <S.NavLink to='/shop'>
                    SHOP
                </S.NavLink>
                { userIsSignedIn ? (
                    <S.NavLink as='span' onClick={signOut}>
                        SIGN OUT
                    </S.NavLink>
                ) : (
                    <S.NavLink to='/sign-in'>
                        SIGN IN
                    </S.NavLink>
                ) }
                <ShoppingCartIcon />
            </S.NavLinkCollection>
            { cartDropdownIsOpen && <ShoppingCartDropdown /> }
        </S.NavigationContainer>
        <Outlet />
    </>);
};

export default DefaultLayout;
