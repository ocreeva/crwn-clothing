import { useDispatch } from "react-redux";
import { cartAction } from "../../store/actions";

import * as S from "./styles";
import { ButtonType } from "../Button";

const ProductCard = ({ product }) => {
    const { id, name, imageUrl, price } = product;

    const dispatch = useDispatch();
    const handleAddToCart = () => dispatch(cartAction.addItem(id));

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
