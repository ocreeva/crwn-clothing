import { useSelector } from "react-redux";
import { productsSelector } from "../../../store/selectors";

import * as S from "./styles";

const ShoppingCartItem = ({ item }) => {
    const { id, quantity } = item;
    const { imageUrl, name, price } = useSelector(productsSelector.getProductById(id));

    return (
        <S.ShoppingCartItem>
            <S.ItemImage src={imageUrl} alt={name} />
            <S.ItemDetails>
                <S.ItemName>{name}</S.ItemName>
                <S.ItemQuantity>{quantity} x ${price}</S.ItemQuantity>
            </S.ItemDetails>
        </S.ShoppingCartItem>
    );
};

export default ShoppingCartItem;
