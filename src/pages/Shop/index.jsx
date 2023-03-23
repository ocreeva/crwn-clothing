import { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";

import CategoryPreview from "./components/CategoryPreview";

const ShopPage = () => {
    const { productsByCategory } = useContext(ProductsContext);

    return (<>{
        Object.keys(productsByCategory).map(key => <CategoryPreview key={key} id={key} category={productsByCategory[key]} />)
    }</>);
};

export default ShopPage;
