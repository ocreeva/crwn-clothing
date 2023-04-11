import { useNavigate } from "react-router-dom";

import { useAppSelector } from "App/hooks";
import { selectCategoryById, selectCategoriesAreLoaded } from "features/categories";

import * as S from "./DirectoryItem.styles";
import LoadingGlyph from "components/LoadingGlyph";

import type { FC } from "react";

type DirectoryItemProps = {
    categoryId: string;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ categoryId }) => {
    const navigate = useNavigate();
    const category = useAppSelector(state => selectCategoryById(state, categoryId));

    const categoryIsLoaded = useAppSelector(selectCategoriesAreLoaded);
    if (!categoryIsLoaded) return (<LoadingGlyph />);

    const { title, imageUrl } = category;

    const handleClick = () => navigate(`/shop/${categoryId}`);

    return (
        <S.DirectoryItem>
            <S.ItemBackground $imageUrl={imageUrl} />
            <S.ItemBody onClick={handleClick}>
                <S.ItemTitle>{title}</S.ItemTitle>
                <S.ItemLink>Shop Now</S.ItemLink>
            </S.ItemBody>
        </S.DirectoryItem>
    )
}

export default DirectoryItem;
