import { useAppDispatch } from "App/hooks";
import { toggleCartDropdown } from "features/dropdown";

import { useAppSelector } from "App/hooks";
import { selectCartCount } from "features/cart";

import * as S from "./ShoppingCartIcon.styles";

import type { FC } from "react";

const ShoppingCartIcon: FC = () => {
    const cartCount = useAppSelector(selectCartCount);

    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(toggleCartDropdown());
    }

    return (
        <S.ShoppingCartIcon onClick={handleClick}>
            <S.IconImage />
            <S.IconCount>{cartCount}</S.IconCount>
        </S.ShoppingCartIcon>
    );
};

export default ShoppingCartIcon;
