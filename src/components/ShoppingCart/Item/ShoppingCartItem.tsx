import { useAppSelector } from "App/hooks";
import { selectProductById } from "features/products";

import * as S from "./ShoppingCartItem.styles";

import type { FC } from "react";
import type { ICartItem } from "features/cart/cartSlice.types";

type ShoppingCartItemProps = {
    item: ICartItem;
}

const ShoppingCartItem: FC<ShoppingCartItemProps> = ({ item: { productId, quantity } }) => {
    const product = useAppSelector(state => selectProductById(state, productId));

    if (!product) return <></>;

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
