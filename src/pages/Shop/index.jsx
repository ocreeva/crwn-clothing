import { useSelector } from "react-redux";
import { productsSelector } from "../../store/selectors";

import CategoryPreview from "./components/CategoryPreview";
import LoadingGlyph from "../../components/LoadingGlyph";

const ShopPage = () => {
    const categoryIds = useSelector(productsSelector.getCategoryIds);
    const isLoading = useSelector(productsSelector.isLoading);

    if (isLoading) return (<LoadingGlyph />);

    return (<>{
        categoryIds.map(id => <CategoryPreview key={id} id={id} />)
    }</>);
};

export default ShopPage;
