import { useContext } from "react";

import ProductsContext from "../../context/ProductsContext";

import { Fragment } from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview.component";

const ShopIndex = () => {
    const { productsByCategory } = useContext(ProductsContext);

    return (<Fragment>{
        Object.keys(productsByCategory).map(key => <CategoryPreview key={key} id={key} category={productsByCategory[key]} />)
    }</Fragment>);
};

export default ShopIndex;
