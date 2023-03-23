import { useContext } from "react";
import ProductsContext from "../../../context/ProductsContext";

import * as S from "./styles";

const ShoppingCartItem = ({ item }) => {
    const { id, quantity } = item;

    const { productById } = useContext(ProductsContext);
    const { imageUrl, name, price } = productById[id];

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
