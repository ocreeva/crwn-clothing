import { useAppSelector } from "App/hooks";
import { selectCategoryIds, selectCategoriesAreLoaded } from "features/categories";

import CategoryPreview from "./components/CategoryPreview";
import LoadingGlyph from "components/LoadingGlyph";

import type { FC } from "react";

const ShopPage: FC = () => {
    const categoryIds = useAppSelector(selectCategoryIds);
    const categoriesAreLoaded = useAppSelector(selectCategoriesAreLoaded);

    if (!categoriesAreLoaded) return (<LoadingGlyph />);

    return (<>{
        categoryIds.map(id => <CategoryPreview key={id} id={id} />)
    }</>);
};

export default ShopPage;
