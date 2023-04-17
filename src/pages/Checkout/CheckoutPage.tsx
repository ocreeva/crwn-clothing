import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "features/cart";

import * as S from "./CheckoutPage.styles";
import CheckoutItem from "./components/Item";
import PaymentForm from "./components/PaymentForm";

import type { FC } from "react";

const CheckoutPage: FC = () => {
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);

    const productIds = Object.keys(items);

    return (
        <S.CheckoutPage>
            <S.PageHeader>
                <S.ColumnHeading>Product</S.ColumnHeading>
                <S.ColumnHeading>Description</S.ColumnHeading>
                <S.ColumnHeading>Quantity</S.ColumnHeading>
                <S.ColumnHeading>Price</S.ColumnHeading>
                <S.ColumnHeading>Remove</S.ColumnHeading>
            </S.PageHeader>
            { productIds.map((productId) => <CheckoutItem key={productId} productId={productId} quantity={items[productId].quantity} /> ) }
            <S.TotalPrice>Total: ${total}</S.TotalPrice>
            <PaymentForm />
        </S.CheckoutPage>
    );
};

export default CheckoutPage;
