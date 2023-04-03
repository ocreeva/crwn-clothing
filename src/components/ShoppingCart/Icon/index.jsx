import { useDispatch } from "react-redux";
import { toggleCartDropdown } from "../../../features/dropdown";

import { useSelector } from "react-redux";
import { selectCartCount } from "../../../features/cart";

import * as S from "./styles";

const ShoppingCartIcon = () => {
    const cartCount = useSelector(selectCartCount);

    const dispatch = useDispatch();
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
