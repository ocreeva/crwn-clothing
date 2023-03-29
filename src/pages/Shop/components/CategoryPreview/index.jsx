import { useSelector } from "react-redux";
import { productsSelector } from "../../../../store/selectors";

import * as S from "./styles";
import ProductCard from "../../../../components/ProductCard";

const CategoryPreview = ({ id }) => {
    const { title, items } = useSelector(productsSelector.getCategoryById(id));

    return (
        <S.CategoryPreview>
            <S.PreviewTitle>
                <S.PreviewTitleLink to={id}>{title}</S.PreviewTitleLink>
            </S.PreviewTitle>
            <S.PreviewItemsContainer>
                { items.slice(0, 4).map(product => <ProductCard key={product.id} product={product} />)}
            </S.PreviewItemsContainer>
        </S.CategoryPreview>
    );
};

export default CategoryPreview;
