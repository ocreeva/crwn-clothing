import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/actions";

import { useSelector } from "react-redux";
import { cartSelector } from "../../../store/selectors";

import * as S from "./styles";

const ShoppingCartIcon = () => {
    const cartCount = useSelector(cartSelector.getCartCount);

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(cartAction.toggleDropdown());
    }

    return (
        <S.ShoppingCartIcon onClick={handleClick}>
            <S.IconImage />
            <S.IconCount>{cartCount}</S.IconCount>
        </S.ShoppingCartIcon>
    );
};

export default ShoppingCartIcon;
