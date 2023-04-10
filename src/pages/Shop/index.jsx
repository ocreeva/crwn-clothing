import { useSelector } from "react-redux";
import { selectCategoryIds, selectCategoriesAreLoaded } from "../../features/categories";

import CategoryPreview from "./components/CategoryPreview";
import LoadingGlyph from "../../components/LoadingGlyph";

const ShopPage = () => {
    const categoryIds = useSelector(selectCategoryIds);
    const categoriesAreLoaded = useSelector(selectCategoriesAreLoaded);

    if (!categoriesAreLoaded) return (<LoadingGlyph />);

    return (<>{
        categoryIds.map(id => <CategoryPreview key={id} id={id} />)
    }</>);
};

export default ShopPage;
