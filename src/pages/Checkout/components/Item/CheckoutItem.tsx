import { useAppDispatch } from "App/hooks";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "features/cart";

import { useAppSelector } from "App/hooks";
import { selectProductById } from "features/products";

import * as S from "./CheckoutItem.styles";

import type { FC } from "react";

type CheckoutItemProps = {
    productId: string;
    quantity: number;
}

const CheckoutItem: FC<CheckoutItemProps> = ({ productId, quantity }) => {
    const { imageUrl, name, price } = useAppSelector(state => selectProductById(state, productId));

    const dispatch = useAppDispatch();
    const handleIncrement = () => dispatch(addItemToCart({ productId }));
    const handleDecrement = () => dispatch(removeItemFromCart({ productId }));
    const handleRemove = () => dispatch(clearItemFromCart({ productId }));

    return (
        <S.CheckoutItem>
            <S.ItemImageContainer>
                <img src={imageUrl} alt={name} />
            </S.ItemImageContainer>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemQuantity>
                <S.ItemQuantityArrow onClick={handleDecrement}>&#10094;</S.ItemQuantityArrow>
                <S.ItemQuantityValue>{quantity}</S.ItemQuantityValue>
                <S.ItemQuantityArrow onClick={handleIncrement}>&#10095;</S.ItemQuantityArrow>
            </S.ItemQuantity>
            <S.ItemPrice>{price}</S.ItemPrice>
            <S.ItemRemoveButton onClick={handleRemove}>&#10005;</S.ItemRemoveButton>
        </S.CheckoutItem>
    );
}

export default CheckoutItem;
