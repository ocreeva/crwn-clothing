import * as S from "./styles";
import ProductCard from "../../../../components/ProductCard";

const CategoryPreview = ({ id, category }) => {
    const { title, items } = category;

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
