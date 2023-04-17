import { useAppSelector } from "App/hooks";
import { selectProductsByCategory, selectProductsAreLoaded } from "features/products";

import { useParams } from "react-router-dom";

import * as S from "./ShopCategoryPage.styles";
import LoadingGlyph from "components/LoadingGlyph";
import ProductCard from "components/ProductCard";

import type { FC } from "react";

const ShopCategoryPage: FC = () => {
    const { categoryId } = useParams();
    if (!categoryId) {
        console.error("Missing categoryId in ShopCategoryPage.");
    }

    const products = useAppSelector(state => selectProductsByCategory(state, categoryId || ""));
    const productsAreLoaded = useAppSelector(selectProductsAreLoaded);

    if (!productsAreLoaded) return (<LoadingGlyph />);

    return (<>
        <S.CategoryProductsCollection>
            { products.map(product => <ProductCard key={product.id} product={product} />) }
        </S.CategoryProductsCollection>
    </>);
}

export default ShopCategoryPage;
