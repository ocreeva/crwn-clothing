import { useDispatch } from "react-redux";
import { addItemToCart } from "features/cart";

import * as S from "./ProductCard.styles";
import { ButtonType } from "components/Button";

import type { FC } from "react";
import type { IProduct } from "features/products";

type ProductCardProps = {
    product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const { id, name, imageUrl, price } = product;

    const dispatch = useDispatch();
    const handleAddToCart = () => dispatch(addItemToCart({ productId: id }));

    return (
        <S.ProductCard>
            <S.CardImage src={imageUrl} alt={name} />
            <S.CardFooter>
                <S.CardName>{name}</S.CardName>
                <S.CardPrice>{price}</S.CardPrice>
            </S.CardFooter>
            <S.CardButton buttonType={ButtonType.Inverted} onClick={handleAddToCart}>Add to Cart</S.CardButton>
        </S.ProductCard>
    );
};

export default ProductCard;
