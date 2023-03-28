import { useContext } from "react";
import CartContext from "../../context/CartContext";

import { useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";

import * as S from "./styles";
import CheckoutItem from "./Item";

const CheckoutPage = () => {
    const { items } = useContext(CartContext);
    const productById = useSelector(productsSelector.getProductById);

    const total = items.reduce((total, {id, quantity}) => {
        const { price } = productById[id];
        return total + price * quantity;
    }, 0);

    return (
        <S.CheckoutPage>
            <S.PageHeader>
                <S.ColumnHeading>Product</S.ColumnHeading>
                <S.ColumnHeading>Description</S.ColumnHeading>
                <S.ColumnHeading>Quantity</S.ColumnHeading>
                <S.ColumnHeading>Price</S.ColumnHeading>
                <S.ColumnHeading>Remove</S.ColumnHeading>
            </S.PageHeader>
            { items.map((item) => <CheckoutItem key={item.id} item={item} /> ) }
            <S.TotalPrice>Total: ${total}</S.TotalPrice>
        </S.CheckoutPage>
    );
};

export default CheckoutPage;
