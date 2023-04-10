import { useSelector } from "react-redux";
import { selectProductsByCategory, selectProductsAreLoaded } from "../../../features/products";

import { useParams } from "react-router-dom";

import * as S from "./styles";
import LoadingGlyph from "../../../components/LoadingGlyph";
import ProductCard from "../../../components/ProductCard";

const ShopCategoryPage = () => {
    const { categoryId } = useParams();
    const products = useSelector(state => selectProductsByCategory(state, categoryId));
    const productsAreLoaded = useSelector(selectProductsAreLoaded);

    if (!productsAreLoaded) return (<LoadingGlyph />);

    return (<>
        <S.CategoryProductsCollection>
            { products.map(product => <ProductCard key={product.id} product={product} />) }
        </S.CategoryProductsCollection>
    </>);
}

export default ShopCategoryPage;
