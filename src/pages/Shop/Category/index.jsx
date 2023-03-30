import { useSelector } from "react-redux";
import { productsSelector } from "../../../store/selectors";

import { useParams } from "react-router-dom";

import * as S from "./styles";
import ProductCard from "../../../components/ProductCard";

const ShopCategoryPage = () => {
    const { categoryId } = useParams();
    const category = useSelector(productsSelector.getCategoryById(categoryId));
    if (!category) return;

    const { items } = category;

    return (<>
        <S.CategoryProductsCollection>
            { items.map(product => <ProductCard key={product.id} product={product} />) }
        </S.CategoryProductsCollection>
    </>);
}

export default ShopCategoryPage;
