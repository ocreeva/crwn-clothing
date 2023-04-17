import { useAppSelector } from "App/hooks";
import { selectCategoryById } from "features/categories";
import { selectProductsByCategory } from "features/products";

import * as S from "./CategoryPreview.styles";
import ProductCard from "components/ProductCard";

import type { FC } from "react";

type CategoryPreviewProps = {
    id: string;
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ id }) => {
    const { title } = useAppSelector(state => selectCategoryById(state, id));
    const items = useAppSelector(state => selectProductsByCategory(state, id));

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
