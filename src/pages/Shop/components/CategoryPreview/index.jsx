import { useSelector } from "react-redux";
import { selectCategoryById } from "../../../../features/categories";
import { selectProductsByCategory } from "../../../../features/products";

import * as S from "./styles";
import ProductCard from "../../../../components/ProductCard";

const CategoryPreview = ({ id }) => {
    const { title } = useSelector(state => selectCategoryById(state, id));
    const items = useSelector(state => selectProductsByCategory(state, id));

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
