import { useContext } from "react";
import CartContext from "../../../context/CartContext";
import ProductsContext from "../../../context/ProductsContext";

import * as S from "./styles";

const CheckoutItem = ({ item }) => {
    const { id, quantity } = item;
    const { productById } = useContext(ProductsContext);
    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    const { imageUrl, name, price } = productById[id];

    const handleIncrement = () => addItemToCart(id);
    const handleDecrement = () => removeItemFromCart(id);
    const handleRemove = () => clearItemFromCart(id);

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
