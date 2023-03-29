import { useSelector } from "react-redux";
import { productsSelector } from "../../../store/selectors";

import { useParams } from "react-router-dom";

import * as S from "./styles";
import ProductCard from "../../../components/ProductCard";

const ShopCategoryPage = () => {
    const { category } = useParams();
    const { items } = useSelector(productsSelector.getCategoryById(category));

    return (<>
        <S.CategoryProductsCollection>
            { items.map(product => <ProductCard key={product.id} product={product} />) }
        </S.CategoryProductsCollection>
    </>);
}

export default ShopCategoryPage;
