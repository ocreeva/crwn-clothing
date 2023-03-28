import { useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";

import CategoryPreview from "./components/CategoryPreview";

const ShopPage = () => {
    const productsByCategory = useSelector(productsSelector.getProductsByCategory);

    return (<>{
        Object.keys(productsByCategory).map(key => <CategoryPreview key={key} id={key} category={productsByCategory[key]} />)
    }</>);
};

export default ShopPage;
