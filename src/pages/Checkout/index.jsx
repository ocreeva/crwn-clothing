import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../features/cart";

import * as S from "./styles";
import CheckoutItem from "./Item";

const CheckoutPage = () => {
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
        </S.CheckoutPage>
    );
};

export default CheckoutPage;
