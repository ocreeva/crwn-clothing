import { useSelector } from "react-redux";
import { selectProductById } from "../../../features/products";

import * as S from "./styles";

const ShoppingCartItem = ({ item }) => {
    const { id, quantity } = item;
    const product = useSelector(state => selectProductById(state, id));
    if (!product) return;

    const { imageUrl, name, price } = product;

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
