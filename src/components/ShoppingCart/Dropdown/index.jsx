import { useContext } from "react";
import CartContext from "../../../context/CartContext";

import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import Button from "../../Button";
import ShoppingCartItem from "../Item";

const ShoppingCartDropdown = () => {
    const { items } = useContext(CartContext);

    const navigate = useNavigate();
    const handleGoToCheckout = () => navigate("/checkout");

    return (
        <S.ShoppingCartDropdown>
            {items.length ? (
                <S.DropdownItems>{
                    items.map(item => <ShoppingCartItem key={item.id} item={item} />)
                }</S.DropdownItems>
            ) : (
                <S.DropdownEmpty>Your cart is empty.</S.DropdownEmpty>
            )}
            <Button type="button" onClick={handleGoToCheckout}>Go to Checkout</Button>
        </S.ShoppingCartDropdown>
    );
};

export default ShoppingCartDropdown;
