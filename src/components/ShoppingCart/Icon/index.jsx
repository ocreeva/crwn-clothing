import { useContext } from "react";
import CartContext from "../../../context/CartContext";

import * as S from "./styles";

const ShoppingCartIcon = () => {
    const { toggleIsCartOpen, items } = useContext(CartContext);
    const count = items.reduce((current, item) => current + item.quantity, 0)

    return (
        <S.ShoppingCartIcon onClick={toggleIsCartOpen}>
            <S.IconImage />
            <S.IconCount>{count}</S.IconCount>
        </S.ShoppingCartIcon>
    );
};

export default ShoppingCartIcon;
