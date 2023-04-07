import { useSelector } from "react-redux";
import { selectCategoryIds, selectCategoriesAsyncState } from "../../features/categories";
import { AsyncStatus } from "../../features/async";

import CategoryPreview from "./components/CategoryPreview";
import LoadingGlyph from "../../components/LoadingGlyph";

const ShopPage = () => {
    const categoryIds = useSelector(selectCategoryIds);
    const asyncState = useSelector(selectCategoriesAsyncState);

    if (asyncState.status !== AsyncStatus.succeeded) return (<LoadingGlyph />);

    return (<>{
        categoryIds.map(id => <CategoryPreview key={id} id={id} />)
    }</>);
};

export default ShopPage;
