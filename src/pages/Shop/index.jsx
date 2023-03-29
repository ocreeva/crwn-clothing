import { useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";

import CategoryPreview from "./components/CategoryPreview";

const ShopPage = () => {
    const categoryIds = useSelector(productsSelector.getCategoryIds);

    return (<>{
        categoryIds.map(id => <CategoryPreview key={id} id={id} />)
    }</>);
};

export default ShopPage;
