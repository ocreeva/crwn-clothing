import { useDispatch } from "react-redux";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../../features/cart";

import { useSelector } from "react-redux";
import { selectProductById } from "../../../features/products";

import * as S from "./styles";

const CheckoutItem = ({ productId, quantity }) => {
    const { imageUrl, name, price } = useSelector(state => selectProductById(state, productId));

    const dispatch = useDispatch();
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
