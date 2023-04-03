import { useDispatch } from "react-redux";
import { cartAction } from "../../../store/actions";

import { useSelector } from "react-redux";
import { selectProductById } from "../../../features/products";

import * as S from "./styles";

const CheckoutItem = ({ item }) => {
    const { id, quantity } = item;
    const { imageUrl, name, price } = useSelector(state => selectProductById(state, id));

    const dispatch = useDispatch();
    const handleIncrement = () => dispatch(cartAction.addItem(id));
    const handleDecrement = () => dispatch(cartAction.removeItem(id));
    const handleRemove = () => dispatch(cartAction.clearItem(id));

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
