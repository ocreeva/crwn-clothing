import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../../features/cart";

import * as S from "./styles";
import Button from "../../Button";
import ShoppingCartItem from "../Item";

const ShoppingCartDropdown = () => {
    const items = useSelector(selectCartItems);
    const productIds = Object.keys(items);

    const navigate = useNavigate();
    const handleGoToCheckout = () => navigate("/checkout");

    return (
        <S.ShoppingCartDropdown>
            {productIds.length ? (
                <S.DropdownItems>{
                    productIds.map(productId => <ShoppingCartItem key={productId} productId={productId} quantity={items[productId].quantity} />)
                }</S.DropdownItems>
            ) : (
                <S.DropdownEmpty>Your cart is empty.</S.DropdownEmpty>
            )}
            <Button type="button" onClick={handleGoToCheckout}>Go to Checkout</Button>
        </S.ShoppingCartDropdown>
    );
};

export default ShoppingCartDropdown;
