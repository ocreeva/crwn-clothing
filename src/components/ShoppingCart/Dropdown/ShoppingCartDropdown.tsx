import { useNavigate } from "react-router-dom";

import { useAppSelector } from "App/hooks";
import { selectCartItems } from "features/cart";

import * as S from "./ShoppingCartDropdown.styles";
import Button from "components/Button";
import ShoppingCartItem from "../Item";

const ShoppingCartDropdown = () => {
    const items = useAppSelector(selectCartItems);
    const productIds = Object.keys(items);

    const navigate = useNavigate();
    const handleGoToCheckout = () => navigate("/checkout");

    return (
        <S.ShoppingCartDropdown>
            {productIds.length ? (
                <S.DropdownItems>{
                    productIds.map(productId => <ShoppingCartItem key={productId} item={items[productId]} />)
                }</S.DropdownItems>
            ) : (
                <S.DropdownEmpty>Your cart is empty.</S.DropdownEmpty>
            )}
            <Button type="button" onClick={handleGoToCheckout}>Go to Checkout</Button>
        </S.ShoppingCartDropdown>
    );
};

export default ShoppingCartDropdown;
